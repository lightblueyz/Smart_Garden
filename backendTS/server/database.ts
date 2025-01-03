// backendTS/server/database.ts

import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Se você tem uma senha, adicione aqui
  database: 'smartgarden',
  port: 3306, // Porta padrão do MySQL
});

const testConnection = async () => {
  try {
    // Apenas espera a conexão ser bem-sucedida, sem atribuir à variável
    await connection;
    console.log('Conexão bem-sucedida ao banco de dados!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
};

export { testConnection };
export { connection };



