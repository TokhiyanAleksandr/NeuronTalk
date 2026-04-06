import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Services | Neuron Talk",
  description: "...",
};

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
