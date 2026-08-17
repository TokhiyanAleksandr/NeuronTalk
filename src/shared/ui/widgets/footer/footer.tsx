"use client";

import { motion } from "framer-motion";
import { Container } from "@/shared/ui/container";
import {LearnMoreLink} from "@/shared/ui/learnMoreLink";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import {Subscribe} from "@/entities/subscribe";

const footerLinks = {
  product: [
    { name: "Services", href: "/services" },
    { name: "Conferences", href: "/conferences/2024" },
    { name: "Insights", href: "/insights" },
  ],
  // company: [
  //   // { name: "About", href: "#" },
  //   { name: "Blog", href: "insights" },
  //   { name: "Careers", href: "projects" },
  // ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="border-t border-zinc-200 bg-black dark:border-zinc-800"
    >
      <Container className="py-12 max-w-[1680px] px-[30px]">
        {/*<div className="py-12">*/}
        <div className="flex-wrap flex gap-8 flex-col md:flex-row justify-between">
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
            <h4 className="mb-4 text-lg font-bold text-white dark:text-zinc-50">
              NeurOn Talk
            </h4>
            <p className="max-w-[330px] text-[1rem ] text-white">
              We turn websites into brain-friendly conversion machines using neuroscience, behavioral data & smart design!
            </p>
            <div className="mt-10 flex items-center gap-6">
              {[
                {
                  label: "Instagram",
                  icon: FaInstagram,
                  href: "https://www.instagram.com/neuron_talks/",
                },
                {
                  label: "Facebook",
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/NeuronTalksConference",
                },
                {
                  label: "LinkedIn",
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/company/neuron-talks",
                },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-white hover:text-zinc-300 transition-colors"
                        aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                );
              })}
            </div>

          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-[1.1rem] font-semibold text-white">
              Product
            </h4>
            <ul className="space-y-3 min-w-[133px]">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 4 }}>
                    <LearnMoreLink href={link.href} className="leading-2 tracking-[2px] capitalize!">{link.name}</LearnMoreLink>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="mb-4 text-[1.1rem] font-semibold text-white">
              Legal
            </h4>
            <ul className="space-y-3 min-w-[133px]">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 4 }}>
                    <LearnMoreLink href={link.href} className="leading-2 tracking-[2px] capitalize!">{link.name}</LearnMoreLink>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className='w-[100%] max-w-[400px]'>
            <h4 className="mb-4 text-[1.1rem] font-semibold text-white">
              Subscribe Us
            </h4>
            <Subscribe/>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800"
        >
            <p className="text-center text-[1rem] text-white">
              © {new Date().getFullYear()} NeruOn Talks. All rights reserved..
            </p>
        </motion.div>

        {/*</div>*/}
      </Container>
    </motion.footer>
  );
}
