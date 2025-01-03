import fetch from 'node-fetch';
import mysql from 'mysql2/promise';

const BLYNK_API_URL = 'https://blynk.cloud/external/api/get';
const BLYNK_AUTH_TOKEN = 'pzKJlAA0yajy8AJF-lTUBze1bkGencMV';


// Configuração do banco de dados
const db = mysql.createPool({
    host: 'localhost', // Ajuste para o seu host
    user: 'root',      // Seu usuário MySQL
    password: '',      // Sua senha MySQL
    database: 'smartgarden',
});

// Função para buscar dados do Blynk
export const fetchSensorData = async () => {
    try {
        // Buscar os dados de luminosidade, temperatura e umidade do Blynk
        const [luminosidadeRes, temperaturaRes, umidadeRes] = await Promise.all([
            fetch(`${BLYNK_API_URL}?token=${BLYNK_AUTH_TOKEN}&pin=V0`),
            fetch(`${BLYNK_API_URL}?token=${BLYNK_AUTH_TOKEN}&pin=V1`),
            fetch(`${BLYNK_API_URL}?token=${BLYNK_AUTH_TOKEN}&pin=V2`),
        ]);

        // Verificar se a resposta da API foi bem-sucedida
        if (!luminosidadeRes.ok || !temperaturaRes.ok || !umidadeRes.ok) {
            throw new Error('Falha ao buscar dados do Blynk');
        }

        // Parse das respostas para pegar os valores
        const [luminosidade, temperatura, umidade] = await Promise.all([
            luminosidadeRes.text(),
            temperaturaRes.text(),
            umidadeRes.text(),
        ]);

        // Converter os valores para número e validar
        const luminosidadeNum = parseFloat(luminosidade);
        const temperaturaNum = parseFloat(temperatura);
        const umidadeNum = parseFloat(umidade);

        if (isNaN(luminosidadeNum) || isNaN(temperaturaNum) || isNaN(umidadeNum)) {
            throw new Error('Dados inválidos retornados da API');
        }

        return {
            luminosidade: luminosidadeNum,
            temperatura: temperaturaNum,
            umidade: umidadeNum,
        };
    } catch (err) {
        throw new Error(`Erro ao buscar dados do Blynk: ${err instanceof Error ? err.message : err}`);
    }
};

// Função para salvar dados no banco
export const saveSensorData = async (data: { luminosidade: number; temperatura: number; umidade: number }) => {
    const query = 'INSERT INTO sensor_data (luminosidade, temperatura, umidade) VALUES (?, ?, ?)';
    await db.execute(query, [data.luminosidade, data.temperatura, data.umidade]);
    return { message: 'Dados salvos com sucesso!', data };
};


// Função para listar dados do banco
export const listSensorData = async () => {
    const query = 'SELECT * FROM sensor_data ORDER BY timestamp DESC';
    const [rows] = await db.query(query);
    return rows;
};
