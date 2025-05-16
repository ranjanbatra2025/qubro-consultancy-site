import React from "react";

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 text-neutral-200">
      <h1 className="text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
      <p className="mb-6">Qubro Consulting values your privacy. This policy outlines how we collect, use, and safeguard your data.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information Collection</h2>
      <p className="mb-4">We may collect basic identifiable information (such as your name and email) via contact forms solely to respond to your inquiry. We do not sell or rent your data to third parties.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Data Usage</h2>
      <p className="mb-4">Collected information is used strictly for communication and service provisioning. We implement reasonable security standards to protect your data.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="mb-4">Our website may use essential cookies for improved experience. You may adjust your browser settings to disable cookies, though some features may not function fully.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">For privacy-related questions, contact us at <a href="mailto:privacy@qubro.co" className="underline">privacy@qubro.co</a>.</p>
      <div className="mt-12 text-neutral-400 text-xs">Last updated: May 2025</div>
    </section>
  );
}
