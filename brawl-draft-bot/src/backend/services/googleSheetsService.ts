import { google } from 'googleapis';

const sheets = google.sheets('v4');

export class GoogleSheetsService {
    private auth: any;

    constructor(auth: any) {
        this.auth = auth;
    }

    async getSheetData(spreadsheetId: string, range: string): Promise<any> {
        try {
            const response = await sheets.spreadsheets.values.get({
                auth: this.auth,
                spreadsheetId,
                range,
            });
            return response.data.values;
        } catch (error) {
            console.error('Error fetching data from Google Sheets:', error);
            throw new Error('Failed to fetch data from Google Sheets');
        }
    }

    async getBrawlerData(): Promise<any> {
        const spreadsheetId = '1npe3UmQAex-J6niO59jSZqs8AIVmHnYHHLH7B1mcp44'; // Example ID
        const range = 'Brawlers!A2:E'; // Adjust range as needed
        return await this.getSheetData(spreadsheetId, range);
    }

    async getMapData(): Promise<any> {
        const spreadsheetId = '1Afhuii3yAndAqnmCe7AMbeuPuZ4camU-87R1SvZepXk'; // Example ID
        const range = 'Maps!A2:C'; // Adjust range as needed
        return await this.getSheetData(spreadsheetId, range);
    }

    async getPickOrderData(): Promise<any> {
        const spreadsheetId = '1OVS7sWrYGcFnyGNxUekteHCrcJLP6afmP3gSG21nUTY'; // Example ID
        const range = 'PickOrder!A2:B'; // Adjust range as needed
        return await this.getSheetData(spreadsheetId, range);
    }

    async getBansData(): Promise<any> {
        const spreadsheetId = '1NfwZKJs4RZxTeKlGgLs2SQiZmxwHnsKnl4talrHf5cM'; // Example ID
        const range = 'Bans!A2:C'; // Adjust range as needed
        return await this.getSheetData(spreadsheetId, range);
    }
}