"use client";

import { motion } from "framer-motion";
import { content } from "@/constants/content";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, message });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {content.contact.title}
          </h2>
          <p className="text-foreground/70 text-lg">
            {content.contact.subtitle}
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-foreground/80"
            >
              {content.contact.form.email.label}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.contact.form.email.placeholder}
              required
              className="w-full px-6 py-4 bg-background border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all text-foreground placeholder:text-foreground/40"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-foreground/80"
            >
              {content.contact.form.message.label}
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={content.contact.form.message.placeholder}
              required
              rows={6}
              className="w-full px-6 py-4 bg-background border border-accent/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all text-foreground placeholder:text-foreground/40 resize-none"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {content.contact.form.submit}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

