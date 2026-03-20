import { motion } from "motion/react";

export default function TermsOfService() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Terms of <span className="text-primary">Service</span>
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the V Qube Enterprises website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">2. Description of Service</h2>
              <p>
                V Qube Enterprises provides specialized software testing and domain support services for the financial sector. Any new features or tools added to the current services shall also be subject to these Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">3. User Obligations</h2>
              <p>
                You agree to use the website and services only for lawful purposes. You are prohibited from using the website to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any local, state, national, or international law</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of V Qube Enterprises or its content suppliers and is protected by international copyright laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">5. Limitation of Liability</h2>
              <p>
                V Qube Enterprises shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">6. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which V Qube Enterprises is headquartered, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

