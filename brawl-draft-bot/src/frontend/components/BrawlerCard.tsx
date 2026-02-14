import React from 'react';

interface BrawlerCardProps {
    name: string;
    iconUrl: string;
    winRate: number;
    description: string;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({ name, iconUrl, winRate, description }) => {
    return (
        <div className="brawler-card">
            <img src={iconUrl} alt={`${name} icon`} className="brawler-icon" />
            <h3 className="brawler-name">{name}</h3>
            <p className="brawler-win-rate">Win Rate: {winRate}%</p>
            <p className="brawler-description">{description}</p>
        </div>
    );
};

export default BrawlerCard;