import { IInsight } from "./model";
import { mockInsights } from "./mock-data";



export async function getInsights(): Promise<IInsight[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockInsights;
}

export async function getInsight(id: string): Promise<IInsight | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const insight = mockInsights.find((insight) => insight.id === Number(id));
    return insight || null;
}
