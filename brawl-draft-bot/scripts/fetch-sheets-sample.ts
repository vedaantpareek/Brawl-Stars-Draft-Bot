import { GoogleSpreadsheet } from 'google-spreadsheet';
import { config } from 'dotenv';

config();

const SHEET_IDS = [
    '1npe3UmQAex-J6niO59jSZqs8AIVmHnYHHLH7B1mcp44',
    '1Afhuii3yAndAqnmCe7AMbeuPuZ4camU-87R1SvZepXk',
    '1OVS7sWrYGcFnyGNxUekteHCrcJLP6afmP3gSG21nUTY',
    '1NfwZKJs4RZxTeKlGgLs2SQiZmxwHnsKnl4talrHf5cM'
];

async function fetchSheetData(sheetId: string) {
    const doc = new GoogleSpreadsheet(sheetId);
    await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0]; // Assuming we want the first sheet
    const rows = await sheet.getRows();
    return rows.map(row => row._rawData);
}

async function fetchAllData() {
    const allData = [];
    for (const sheetId of SHEET_IDS) {
        const data = await fetchSheetData(sheetId);
        allData.push(...data);
    }
    return allData;
}

fetchAllData()
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });