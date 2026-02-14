import request from 'supertest';
import { app } from '../src/backend/server'; // Adjust the import based on your server setup
import { Brawler } from '../src/backend/models/brawler';

describe('Brawl Stars Draft Bot Integration Tests', () => {
    it('should fetch brawlers from Google Sheets', async () => {
        const response = await request(app).get('/api/brawlers');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should allow banning brawlers', async () => {
        const bans = ['Shelly', 'Colt', 'Jessie'];
        const response = await request(app)
            .post('/api/bans')
            .send({ bans });
        expect(response.status).toBe(200);
        expect(response.body.banned).toEqual(bans);
    });

    it('should return best brawler picks based on map and bans', async () => {
        const map = 'Showdown';
        const bans = ['Shelly', 'Colt', 'Jessie'];
        const response = await request(app)
            .post('/api/picks')
            .send({ map, bans });
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.picks)).toBe(true);
        expect(response.body.picks.length).toBeGreaterThan(0);
    });

    it('should respect pick order', async () => {
        const pickOrder = ['Team A', 'Team B'];
        const response = await request(app)
            .post('/api/pick-order')
            .send({ pickOrder });
        expect(response.status).toBe(200);
        expect(response.body.order).toEqual(pickOrder);
    });
});