import axios from 'axios';

const CORESTATS_API_URL = 'https://corestats.pro/api/brawlers';

export class CoreStatsService {
    async getBrawlerStats(brawlerId: string) {
        try {
            const response = await axios.get(`${CORESTATS_API_URL}/${brawlerId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching brawler stats:', error);
            throw new Error('Failed to fetch brawler stats');
        }
    }

    async getAllBrawlersStats() {
        try {
            const response = await axios.get(CORESTATS_API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching all brawlers stats:', error);
            throw new Error('Failed to fetch brawlers stats');
        }
    }
}