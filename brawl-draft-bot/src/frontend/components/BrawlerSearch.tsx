import React, { useState } from 'react';

const BrawlerSearch = ({ brawlers, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBrawlers = brawlers.filter(brawler =>
        brawler.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="brawler-search">
            <input
                type="text"
                placeholder="Search for a brawler..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="brawler-list">
                {filteredBrawlers.map(brawler => (
                    <div key={brawler.id} className="brawler-card" onClick={() => onSelect(brawler)}>
                        <img src={brawler.icon} alt={brawler.name} />
                        <span>{brawler.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrawlerSearch;