import express from 'express';
import cors from 'cors'; // Importa o módulo CORS
import { fetchSensorData, saveSensorData, listSensorData } from './controllers/sensorController';

const app = express();
const port = 3000;

// Middleware para permitir requisições de qualquer origem
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.get('/fetch-and-save', async (req, res) => {
    try {
        const data = await fetchSensorData();
        const result = await saveSensorData(data);
        res.status(200).json(result);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Erro desconhecido ao processar a requisição' });
        }
    }
});

app.get('/list', async (req, res) => {
    try {
        const data = await listSensorData();
        res.status(200).json(data);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Erro desconhecido ao processar a requisição' });
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
