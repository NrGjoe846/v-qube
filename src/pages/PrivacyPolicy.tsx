import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
              <p>
                V Qube Enterprises ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact data (email, phone number, address)</li>
                <li>Professional information (company name, job title)</li>
                <li>Communication data (messages sent via contact forms)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
              <p>
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website and services</li>
                <li>Communicate with you, either directly or through one of our partners</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">4. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">5. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="font-bold text-slate-900">
                V Qube Enterprises<br />
                Email: privacy@vqube.com<br />
                Address: 123 Financial District, Suite 500, NY
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
