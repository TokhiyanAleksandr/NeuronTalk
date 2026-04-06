"use client";

import { motion } from "framer-motion";
import { Container } from "@/shared/ui/container";
import Link from "next/link";

const digitalServices = [
  "Custom business websites",
  "Web applications & platforms",
  "E-commerce solutions",
  "REST & GraphQL API integrations",
  "Customer and partner portals",
  "Corporate intranet environments",
  "Performance optimization",
  "Security and accessibility",
  "UX/UI design and experience mapping",
];

const processSteps = [
  {
    title: "Discover",
    description: "Analysis of goals, audience and systems",
  },
  {
    title: "Design",
    description: "UX user flows + UI visuals",
  },
  {
    title: "Develop",
    description: "Reliable architecture, modern tech stack",
  },
  {
    title: "Optimize",
    description: "Analytics, SEO, continuous improvements",
  },
];

const whyChooseUs = [
  {
    title: "Business first thinking",
  },
  {
    title: "Human-centered UX",
  },
  {
    title: "Scalable architecture",
  },
  {
    title: "Long-term support and partnership",
  },
];

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-white py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-4 h-1 w-24 bg-[#FFC700]"></div>
            <h1 className="mb-8 text-6xl font-bold leading-tight sm:text-7xl lg:text-8xl">
              <span className="text-zinc-900">aaDigital that works for </span>
              <span className="text-[#FFC700]">real people</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-zinc-600 sm:text-2xl">
              We build digital solutions that connect brands with their audiences — clear, scalable and designed for performance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacts"
                className="inline-block rounded-lg bg-[#FFC700] px-8 py-4 text-lg font-semibold text-black transition-opacity hover:opacity-90"
              >
                Request a consultation
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed"
          >
            <p className="text-zinc-700">
              Digital strategy is more than just a website — it's a communication system. Every solution must be user-oriented, designed with the people who will interact with it in mind.
            </p>
            <p className="text-zinc-700">
              We bring together branding, technology, UX and marketing to create digital experiences that deliver real business value. Our approach ensures that each project not only looks great but performs exceptionally.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-[#FFC700] opacity-50"></div>
              <span className="text-sm font-medium text-[#FFC700] opacity-70">Strategy First</span>
              <div className="h-px flex-1 bg-[#FFC700] opacity-50"></div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-zinc-100 py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="mb-12 text-4xl font-bold text-zinc-900 sm:text-5xl">
              Digital services for modern organizations:
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {digitalServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-lg text-zinc-700"
                >
                  <span 
                    className="mt-1 text-[#FFC700] opacity-30"
                    style={{ transition: "opacity 0.3s ease" }}
                  >
                    —
                  </span>
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 h-px w-32 bg-[#FFC700] opacity-20"
            ></motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-zinc-200 py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold text-zinc-900 sm:text-5xl">
              Technology with human focus
            </h2>
            <p className="text-xl leading-relaxed text-zinc-700">
              Technology is effective only when people understand it and enjoy using it. We design solutions that work logically, quickly and pleasantly.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="h-1 w-16 bg-[#FFC700] opacity-40"></div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-zinc-300 py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl"
          >
            <h2 className="mb-16 text-center text-4xl font-bold text-zinc-900 sm:text-5xl">
              How we build
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="mb-4 text-3xl font-bold text-zinc-900">
                    {step.title} →
                  </div>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-[#000000] py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="mb-16 text-center text-4xl font-bold text-white sm:text-5xl">
              Why choose us
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-xl font-medium text-white"
                >
                  {item.title}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-20 mx-auto max-w-3xl text-center"
            >
              <p className="text-xl leading-relaxed text-[#FFFFFF] sm:text-2xl opacity-90">
                We help companies grow digitally: improve workflows, automate processes, increase conversions and create seamless user journeys.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-[#000000] py-32 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let's build something digital that drives results.
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacts"
                className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-zinc-200"
              >
                Request a consultation
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
