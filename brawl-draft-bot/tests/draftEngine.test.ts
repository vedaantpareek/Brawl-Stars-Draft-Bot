import { Brawler } from '../src/backend/models/brawler';
import { DraftEngine } from '../src/backend/services/draftEngine';

describe('DraftEngine', () => {
    let draftEngine: DraftEngine;

    beforeEach(() => {
        draftEngine = new DraftEngine();
    });

    test('should select the best brawler based on map and bans', () => {
        const map = 'Showdown';
        const bans = ['Shelly', 'Nita', 'Colt'];
        const availableBrawlers: Brawler[] = [
            new Brawler('Spike', { winRate: 60 }),
            new Brawler('Leon', { winRate: 55 }),
            new Brawler('Jessie', { winRate: 50 }),
        ];

        const bestBrawler = draftEngine.selectBestBrawler(map, bans, availableBrawlers);
        expect(bestBrawler.name).toBe('Spike');
    });

    test('should respect pick order when selecting brawlers', () => {
        const map = 'Brawl Ball';
        const bans = ['Poco', 'Jacky', 'Pam'];
        const availableBrawlers: Brawler[] = [
            new Brawler('Surge', { winRate: 65 }),
            new Brawler('Gale', { winRate: 58 }),
            new Brawler('Carl', { winRate: 52 }),
        ];

        draftEngine.setPickOrder(['Team A', 'Team B']);
        const teamABrawler = draftEngine.selectBrawlerForTeam('Team A', map, bans, availableBrawlers);
        expect(teamABrawler.name).toBe('Surge');
    });

    test('should not select banned brawlers', () => {
        const map = 'Heist';
        const bans = ['Darryl', 'Bibi', 'Bull'];
        const availableBrawlers: Brawler[] = [
            new Brawler('Penny', { winRate: 62 }),
            new Brawler('Spike', { winRate: 60 }),
            new Brawler('Darryl', { winRate: 55 }),
        ];

        const bestBrawler = draftEngine.selectBestBrawler(map, bans, availableBrawlers);
        expect(bestBrawler.name).toBe('Spike');
    });

    test('should handle empty available brawlers', () => {
        const map = 'Showdown';
        const bans = ['Shelly', 'Nita', 'Colt'];
        const availableBrawlers: Brawler[] = [];

        const bestBrawler = draftEngine.selectBestBrawler(map, bans, availableBrawlers);
        expect(bestBrawler).toBeNull();
    });
});