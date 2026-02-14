import React from 'react';

interface PickOrderHelperProps {
    pickOrder: string[];
    currentPick: number;
}

const PickOrderHelper: React.FC<PickOrderHelperProps> = ({ pickOrder, currentPick }) => {
    return (
        <div className="pick-order-helper">
            <h2>Pick Order Helper</h2>
            <ul>
                {pickOrder.map((brawler, index) => (
                    <li key={index} className={index === currentPick ? 'current-pick' : ''}>
                        {brawler}
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .pick-order-helper {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }
                .current-pick {
                    font-weight: bold;
                    color: #007bff;
                }
            `}</style>
        </div>
    );
};

export default PickOrderHelper;