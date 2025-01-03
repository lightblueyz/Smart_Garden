import express from 'express';
import { fetchSensorData, saveSensorData, listSensorData } from '../controllers/sensorController';

const router = express.Router();

// Rota para buscar dados do Blynk e salvar no banco
router.get('/fetch-and-save', async (req, res) => {
    try {
        const data = await fetchSensorData();
        const result = await saveSensorData(data);
        res.status(200).json(result);
    } catch (err: unknown) {
        // Verificando se err é uma instância de Error
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Erro desconhecido' });
        }
    }
});

// Rota para listar os dados salvos
router.get('/list', async (req, res) => {
    try {
        const data = await listSensorData();
        res.status(200).json(data);
    } catch (err: unknown) {
        // Verificando se err é uma instância de Error
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Erro desconhecido' });
        }
    }
});

export default router;
