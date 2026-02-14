import React, { useState, useEffect } from 'react';
import BrawlerSearch from '../components/BrawlerSearch';
import BanPicker from '../components/BanPicker';
import DraftBoard from '../components/DraftBoard';
import { Brawler } from '../../shared/constants';

const DraftPage: React.FC = () => {
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);
    const [bannedBrawlers, setBannedBrawlers] = useState<Brawler[]>([]);
    const [selectedBrawlers, setSelectedBrawlers] = useState<Brawler[]>([]);
    const [map, setMap] = useState<string>('');
    const [pickOrder, setPickOrder] = useState<number[]>([1, 2, 1, 2]); // Example pick order

    useEffect(() => {
        // Fetch brawlers from backend or a service
        const fetchBrawlers = async () => {
            const response = await fetch('/api/brawlers'); // Adjust API endpoint as necessary
            const data = await response.json();
            setBrawlers(data);
        };

        fetchBrawlers();
    }, []);

    const handleBanChange = (banned: Brawler[]) => {
        setBannedBrawlers(banned);
    };

    const handleBrawlerSelect = (brawler: Brawler) => {
        if (!bannedBrawlers.includes(brawler) && !selectedBrawlers.includes(brawler)) {
            setSelectedBrawlers([...selectedBrawlers, brawler]);
        }
    };

    return (
        <div className="draft-page">
            <h1>Brawl Stars Draft Bot</h1>
            <BrawlerSearch brawlers={brawlers} onSelect={handleBrawlerSelect} bannedBrawlers={bannedBrawlers} />
            <BanPicker brawlers={brawlers} onBanChange={handleBanChange} />
            <DraftBoard selectedBrawlers={selectedBrawlers} />
            {/* Additional UI elements for map selection and pick order can be added here */}
        </div>
    );
};

export default DraftPage;