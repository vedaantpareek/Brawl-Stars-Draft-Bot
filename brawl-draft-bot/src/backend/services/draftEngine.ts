import { Brawler } from '../models/brawler';
import { CoreStatsService } from './corestatsService';

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
        try {
            const coreStats = new CoreStatsService();
            const coreStatsData = await coreStats.getAllBrawlersStats();
            this.brawlers = this.mergeData(null, coreStatsData);
        } catch (e) {
            console.warn('DraftEngine: could not load external data, using empty list.', e);
            this.brawlers = [];
        }
    }

    private mergeData(_sheetsData: any, coreStatsData: any): Brawler[] {
        if (!coreStatsData || !Array.isArray(coreStatsData)) return [];
        // Map API response to Brawler[] as needed; placeholder for real mapping
        return [];
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

/** Async helper for the API: returns draft recommendations for the given map, bans, and pick order. */
export async function getDraftRecommendations(
    map: string,
    bans: string[] = [],
    pickOrder: string[] = []
): Promise<{ bestBrawler: Brawler | null; recommendations?: Brawler[] }> {
    const engine = new DraftEngine();
    await engine.initialize();
    const bestBrawler = engine.getBestBrawler({ map, bans, pickOrder });
    return { bestBrawler, recommendations: bestBrawler ? [bestBrawler] : [] };
}