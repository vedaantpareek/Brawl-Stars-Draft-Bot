export interface Brawler {
    id: string;
    name: string;
    icon: string;
    winRate: number;
    mapSuitability: Record<string, number>; // Maps and their suitability scores
    pickOrder: number; // Preferred pick order
}

export class BrawlerModel implements Brawler {
    constructor(
        public id: string,
        public name: string,
        public icon: string,
        public winRate: number,
        public mapSuitability: Record<string, number>,
        public pickOrder: number
    ) {}

    getIconUrl(): string {
        return this.icon;
    }

    isSuitableForMap(map: string): boolean {
        return this.mapSuitability[map] > 0;
    }

    static fromData(data: any): BrawlerModel {
        return new BrawlerModel(
            data.id,
            data.name,
            data.icon,
            data.winRate,
            data.mapSuitability,
            data.pickOrder
        );
    }
}