import { getInsight, getInsights } from "@/entities/insight/api";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightContent } from "./insight-content";

interface InsightPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((insight) => ({
    id: insight.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { id } = await params;
  const insight = await getInsight(id);

  if (!insight) {
    return {
      title: "Пост не найден | Neuron Talk",
    };
  }

  return {
    title: `${insight.title} | Neuron Talk`,
    description: "fjfdjvnfjdjvfdkn",
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { id } = await params;
  const insight = await getInsight(id);

  if (!insight) {
    notFound();
  }

  return <InsightContent insight={insight} />;
}
