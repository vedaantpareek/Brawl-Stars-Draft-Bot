import React, { useState, useEffect } from 'react';
import BrawlerCard from './BrawlerCard';
import BrawlerSearch from './BrawlerSearch';
import BanPicker from './BanPicker';
import PickOrderHelper from './PickOrderHelper';
import { Brawler } from '../../types';

const DraftBoard: React.FC = () => {
    const [brawlers, setBrawlers] = useState<Brawler[]>([]);
    const [selectedBrawlers, setSelectedBrawlers] = useState<Brawler[]>([]);
    const [bannedBrawlers, setBannedBrawlers] = useState<Brawler[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch brawlers data from backend or a service
        const fetchBrawlers = async () => {
            const response = await fetch('/api/brawlers'); // Adjust the endpoint as necessary
            const data = await response.json();
            setBrawlers(data);
        };

        fetchBrawlers();
    }, []);

    const handleBrawlerSelect = (brawler: Brawler) => {
        if (!bannedBrawlers.includes(brawler) && !selectedBrawlers.includes(brawler)) {
            setSelectedBrawlers([...selectedBrawlers, brawler]);
        }
    };

    const handleBanSelect = (brawler: Brawler) => {
        if (!bannedBrawlers.includes(brawler)) {
            setBannedBrawlers([...bannedBrawlers, brawler]);
        }
    };

    return (
        <div className="draft-board">
            <h2>Draft Board</h2>
            <BanPicker brawlers={brawlers} onBanSelect={handleBanSelect} />
            <BrawlerSearch brawlers={brawlers} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="selected-brawlers">
                {selectedBrawlers.map(brawler => (
                    <BrawlerCard key={brawler.id} brawler={brawler} />
                ))}
            </div>
            <PickOrderHelper selectedBrawlers={selectedBrawlers} />
        </div>
    );
};

export default DraftBoard;