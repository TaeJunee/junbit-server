export declare class Upbit {
    baseURL: string;
    options: {
        method: string;
        headers: {
            accept: string;
        };
    };
    getMinuteCandle(unit: number, market: string, count?: number): Promise<any>;
    getTicker(markets: string): Promise<any>;
}
