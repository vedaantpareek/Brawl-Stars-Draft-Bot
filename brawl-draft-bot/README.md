# Brawl Stars Draft Bot

## Overview
The Brawl Stars Draft Bot is a web application designed to assist players in drafting brawlers for competitive matches. It utilizes data from various sources, including Google Sheets and corestats.pro, to provide optimal brawler selections based on the current map, pick order, and banning system.

## Features
- **Dynamic Brawler Selection**: The bot analyzes the current map and pick order to suggest the best brawlers.
- **Banning System**: Users can manually input banned brawlers, allowing for strategic planning.
- **User-Friendly Interface**: A clean UI with brawler icons and a search bar for easy navigation and selection.
- **Data Integration**: Fetches real-time data from Google Sheets and corestats.pro for accurate statistics and win rates.

## Project Structure
```
brawl-draft-bot
├── src
│   ├── backend
│   │   ├── server.ts
│   │   ├── routes
│   │   │   ├── api.ts
│   │   │   └── auth.ts
│   │   ├── services
│   │   │   ├── googleSheetsService.ts
│   │   │   ├── corestatsService.ts
│   │   │   └── draftEngine.ts
│   │   ├── models
│   │   │   └── brawler.ts
│   │   └── utils
│   │       └── cache.ts
│   ├── frontend
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   └── DraftPage.tsx
│   │   ├── components
│   │   │   ├── DraftBoard.tsx
│   │   │   ├── BrawlerCard.tsx
│   │   │   ├── BrawlerSearch.tsx
│   │   │   ├── BanPicker.tsx
│   │   │   └── PickOrderHelper.tsx
│   │   ├── hooks
│   │   │   └── useDraft.ts
│   │   ├── styles
│   │   │   └── main.css
│   │   └── types
│   │       └── index.ts
│   └── shared
│       └── constants.ts
├── public
│   └── index.html
├── assets
│   └── icons
│       └── README.md
├── scripts
│   └── fetch-sheets-sample.ts
├── tests
│   ├── draftEngine.test.ts
│   └── integration.test.ts
├── .env.example
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd brawl-draft-bot
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Start the backend server:
   ```
   npm run start:backend
   ```
2. Start the frontend application:
   ```
   npm run start:frontend
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the draft bot.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.