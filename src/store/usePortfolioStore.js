import { create } from "zustand";
import { getHoldings, getAllocation, getPerformance, getSummary } from "../api/portfolio";

const initial = {
    loading: false,
    error: null,
    holdings: [],
    allocation: { bySector: {}, byMarketCap: {} },
    performance: { timeline: [], returns: { portfolio: {}, nifty50: {}, gold: {} } },
    summary: null,
};

export const usePortfolioStore = create((set, get) => ({
    ...initial,
    fetchAll: async () => {
        set({ loading: true, error: null });
        try {
            const [holdings, allocation, performance, summary] = await Promise.all([
            getHoldings(),
            getAllocation(),
            getPerformance(),
            getSummary(),
            ]);
            set({ holdings, allocation, performance, summary, loading: false, error: null });
        } catch (e) {
            set({ error: e.message || "Failed to load data", loading: false });
        }
    },
}));