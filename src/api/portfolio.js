import api from "./client";

export async function getHoldings() {
    const { data } = await api.get("/portfolio/holdings");
    return data;
}

export async function getAllocation() {
    const { data } = await api.get("/portfolio/allocation");
    return data;
}

export async function getPerformance() {
    const { data } = await api.get("/portfolio/performance");
    return data;
}

export async function getSummary() {
    const { data } = await api.get("/portfolio/summary");
    return data;
}