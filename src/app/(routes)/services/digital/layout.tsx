import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services | Neuron Talk",
  description: "We build digital solutions that connect brands with their audiences — clear, scalable and designed for performance. Custom websites, web applications, e-commerce and more.",
};

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
