import { Brawler } from '../models/brawler';
import { fetchGoogleSheetsData } from './googleSheetsService';
import { fetchCoreStatsData } from './corestatsService';

interface DraftOptions {
    map: string;
    bans: string[];
    pickOrder: string[];
}

export class DraftEngine {
    private brawlers: Brawler[];

    constructor() {
        this.brawlers = [];
    }

    async initialize() {
        const sheetsData = await fetchGoogleSheetsData();
        const coreStatsData = await fetchCoreStatsData();
        this.brawlers = this.mergeData(sheetsData, coreStatsData);
    }

    private mergeData(sheetsData: any, coreStatsData: any): Brawler[] {
        // Logic to merge data from Google Sheets and corestats.pro
        // This should return an array of Brawler instances
        return []; // Placeholder for merged brawler data
    }

    public getBestBrawler(options: DraftOptions): Brawler | null {
        const { map, bans, pickOrder } = options;

        // Filter out banned brawlers
        const availableBrawlers = this.brawlers.filter(brawler => !bans.includes(brawler.name));

        // Logic to determine the best brawler based on map and pick order
        // This should return the best brawler for the given options
        return null; // Placeholder for the best brawler
    }
}