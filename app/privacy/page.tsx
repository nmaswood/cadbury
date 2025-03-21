// app/privacy/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl ml-4">
            Syed Consulting
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container px-8 py-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center text-primary mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="mb-4">
                  At Syed Consulting, we respect your privacy and are committed
                  to protecting your personal data. This privacy policy explains
                  how we collect, use, and safeguard your information when you
                  use our website or services.
                </p>
                <p>
                  This policy applies to information we collect through our
                  website, in email, text, or other electronic communications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect several types of information from and about
                  users of our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Personal information such as name, email address, phone
                    number, and company name when you contact us or request a
                    consultation
                  </li>
                  <li>
                    Usage details, IP addresses, and information collected
                    through cookies and other tracking technologies
                  </li>
                  <li>
                    Information about your device and internet connection,
                    including your device unique device identifier, IP address,
                    operating system, and browser type
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use information that we collect about you or that you
                  provide to us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To present our website and its contents to you</li>
                  <li>
                    To provide you with information, products, or services that
                    you request from us
                  </li>
                  <li>To fulfill any other purpose for which you provide it</li>
                  <li>To carry out our obligations and enforce our rights</li>
                  <li>To improve our website and customer service</li>
                  <li>
                    In any other way we may describe when you provide the
                    information
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p>
                  We have implemented measures designed to secure your personal
                  information from accidental loss and from unauthorized access,
                  use, alteration, and disclosure. All information you provide
                  to us is stored on secure servers behind firewalls. However,
                  the transmission of information via the internet is not
                  completely secure, and we cannot guarantee the security of
                  your personal information transmitted to our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Changes to Our Privacy Policy
                </h2>
                <p>
                  We may update our privacy policy from time to time. If we make
                  material changes to how we treat our user personal
                  information, we will post the new privacy policy on this page.
                  The date the privacy policy was last revised is identified at
                  the top of the page. You are responsible for periodically
                  visiting our website and this privacy policy to check for any
                  changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p>
                  To ask questions or comment about this privacy policy and our
                  privacy practices, contact us at: privacy@syedconsulting.com
                </p>
              </section>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/">Return to Home Page</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t p-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Syed Consulting. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground font-bold"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
