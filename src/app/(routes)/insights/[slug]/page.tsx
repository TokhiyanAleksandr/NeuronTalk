import { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightContent } from "./insight-content";
import {getBlog} from "@/entities/insight/Model/api";

interface IProps {
  params: Promise<{ slug: string }>;
}

// export async function generateStaticParams() {
//   const insights = await getInsights();
//   return insights.map((insight) => ({
//     id: insight.id.toString(),
//   }));
// }

export async function generateMetadata({
  params,
}: IProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getBlog(slug)

  if (!insight) {
    return {
      title: "Post not found | NeurOn Talk",
    };
  }

  return {
    title: `${insight.title} | NeurOn Talk`,
    description: insight.slug,
  };
}

export default async function InsightPage({ params }: IProps) {
  const { slug } = await params;
  const insight = await getBlog(slug)

  return <InsightContent insight={insight} />;
}
