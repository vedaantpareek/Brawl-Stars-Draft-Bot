import React from 'react';

interface BanPickerProps {
    bannedBrawlers: string[];
    onBanChange: (brawler: string) => void;
    availableBrawlers: string[];
}

const BanPicker: React.FC<BanPickerProps> = ({ bannedBrawlers, onBanChange, availableBrawlers }) => {
    const handleBanToggle = (brawler: string) => {
        if (bannedBrawlers.includes(brawler)) {
            onBanChange(brawler); // Remove ban
        } else {
            onBanChange(brawler); // Add ban
        }
    };

    return (
        <div className="ban-picker">
            <h3>Select Banned Brawlers</h3>
            <div className="brawler-list">
                {availableBrawlers.map((brawler) => (
                    <div key={brawler} className={`brawler-card ${bannedBrawlers.includes(brawler) ? 'banned' : ''}`} onClick={() => handleBanToggle(brawler)}>
                        <img src={`path/to/icons/${brawler}.png`} alt={brawler} />
                        <span>{brawler}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BanPicker;