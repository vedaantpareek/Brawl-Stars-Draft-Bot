import express from 'express';
import { getDraftRecommendations } from '../services/draftEngine';

const router = express.Router();

// Endpoint to get draft recommendations based on input parameters
router.post('/draft', async (req, res) => {
    const { map, bans, pickOrder } = req.body;

    try {
        const recommendations = await getDraftRecommendations(map, bans, pickOrder);
        res.status(200).json(recommendations);
    } catch (error) {
        console.error('Error fetching draft recommendations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;