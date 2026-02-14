export interface Brawler {
    id: string;
    name: string;
    icon: string;
    winRate: number;
    mapSuitability: Record<string, number>;
}

export interface DraftState {
    bannedBrawlers: string[];
    pickedBrawlers: string[];
    pickOrder: string[];
    currentPick: number;
}

export interface MapData {
    name: string;
    brawlerSuitability: Record<string, number>;
}

export interface UserInput {
    bans: string[];
    selectedMap: string;
    pickOrder: string[];
}