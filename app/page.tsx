"use client";

import { useState, useEffect } from "react";
import {
  Mic,
  Radio,
  Bot,
  Cpu,
  Phone,
  Server,
  MessageSquare,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="font-bold text-xl">Syed Consulting</div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#expertise"
              className="font-medium hover:text-primary transition-colors"
            >
              Technology
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Modified hero section with content on left and image on right */}
        <section
          id="hero"
          className="py-24 bg-gradient-to-r from-slate-100 to-slate-200"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="max-w-xl space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-5xl font-bold leading-tight text-slate-900">
                  Next-Generation Voice AI Technology
                </h1>
                <p className="text-xl text-slate-700">
                  Transforming customer experiences through innovative voice
                  intelligence solutions powered by advanced speech recognition
                  and language models.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button size="lg" className="px-6">
                    <Link href="https://cal.com/nasr-maswood/15min">
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="relative h-[400px] rounded-xl overflow-hidden shadow-xl w-250"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/screen-shot.png"
                  alt="Voice AI Solutions"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
            <span className="block h-1 w-20 bg-primary mx-auto mt-4"></span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex gap-5 p-6 rounded-lg hover:bg-slate-50 transition-all"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center mt-1">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Advanced AI Assistants
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-turn conversational AI with natural language
                  understanding that handles complex customer inquiries with
                  human-like understanding.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5 p-6 rounded-lg hover:bg-slate-50 transition-all"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center mt-1">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  24/7 Dedicated Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive training and ongoing support for your voice
                  technology stack with specialized engineers available around
                  the clock.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5 p-6 rounded-lg hover:bg-slate-50 transition-all"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center mt-1">
                <Radio className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plug-and-play compatibility with existing telephony
                  infrastructure, CRMs, and customer service platforms for rapid
                  deployment.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-5 p-6 rounded-lg hover:bg-slate-50 transition-all"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center mt-1">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Cutting-Edge Technology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built on the latest advances in speech recognition, natural
                  language processing, and generative AI for superior customer
                  experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="technical-expertise" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Voice AI Technology Stack
              <span className="block h-1 w-20 bg-primary mx-auto mt-4"></span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex gap-5">
                  <div className="flex items-center justify-center flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      FreeSWITCH & SIP Trunking
                    </h3>
                    <p className="text-muted-foreground">
                      Enterprise-grade VoIP infrastructure with
                      high-availability FreeSWITCH deployment and redundant SIP
                      trunking connections.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex items-center justify-center flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Mic className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Speech Recognition & Synthesis
                    </h3>
                    <p className="text-muted-foreground">
                      Low-latency, high-accuracy STT and TTS engines with
                      support for multiple languages, dialects, and acoustic
                      environments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex items-center justify-center flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Large Language Models
                    </h3>
                    <p className="text-muted-foreground">
                      Custom-trained LLMs optimized for conversational
                      intelligence with domain-specific knowledge and reasoning
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex items-center justify-center flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Server className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-muted-foreground">
                      Kubernetes-orchestrated microservices architecture
                      supporting millions of concurrent voice interactions with
                      sub-second response times.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
              >
                <Image
                  src="/screen-shot.png"
                  alt="Voice AI Analytics Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Unified Voice Intelligence Platform
                  </h3>
                  <p className="text-white/90">
                    Real-time voice analytics and conversation insights
                    dashboard
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <motion.div
            className="text-sm text-muted-foreground mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Syed Consulting. All rights reserved.
          </motion.div>
          <div className="flex gap-10">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
