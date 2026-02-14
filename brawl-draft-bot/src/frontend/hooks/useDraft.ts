import { useState, useEffect } from 'react';
import { Brawler } from '../types';
import { fetchBrawlers, fetchDraftData } from '../services/api';

const useDraft = (bans: string[], map: string, pickOrder: string[]) => {
    const [availableBrawlers, setAvailableBrawlers] = useState<Brawler[]>([]);
    const [selectedBrawlers, setSelectedBrawlers] = useState<Brawler[]>([]);
    const [draftStatus, setDraftStatus] = useState<string>('waiting');

    useEffect(() => {
        const loadBrawlers = async () => {
            const brawlers = await fetchBrawlers();
            const filteredBrawlers = brawlers.filter(brawler => !bans.includes(brawler.name));
            setAvailableBrawlers(filteredBrawlers);
        };

        loadBrawlers();
    }, [bans]);

    const selectBrawler = (brawler: Brawler) => {
        if (selectedBrawlers.length < pickOrder.length && !selectedBrawlers.includes(brawler)) {
            setSelectedBrawlers([...selectedBrawlers, brawler]);
            setDraftStatus('brawler selected');
        }
    };

    const resetDraft = () => {
        setSelectedBrawlers([]);
        setDraftStatus('waiting');
    };

    return {
        availableBrawlers,
        selectedBrawlers,
        draftStatus,
        selectBrawler,
        resetDraft,
    };
};

export default useDraft;