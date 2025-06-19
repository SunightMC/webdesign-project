"use client";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FlipModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  subtitle?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function FlipModal({ open, onClose, title, description, image, subtitle, features, ctaText, ctaHref }: FlipModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={backdropRef}
          onClick={e => {
            if (e.target === backdropRef.current) onClose();
          }}
        >
          <motion.div
            className="relative w-full max-w-2xl p-0"
            initial={{ rotateY: 90, scale: 0.8 }}
            animate={{ rotateY: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } }}
            exit={{ rotateY: 90, scale: 0.8, opacity: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }}
            style={{ perspective: 1200 }}
          >
            <div className="bg-background rounded-2xl shadow-2xl overflow-hidden relative">
              <Image src={image} alt={title} width={800} height={400} className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 text-center">{title}</h3>
                {subtitle && <h4 className="text-lg text-primary text-center mb-4 font-semibold">{subtitle}</h4>}
                <p className="text-lg text-muted-foreground mb-6 text-center">{description}</p>
                {features && features.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-base">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {ctaText && (
                  <div className="flex justify-center">
                    <a
                      href={ctaHref || "#"}
                      className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground text-lg font-semibold shadow hover:scale-105 transition-transform duration-200"
                    >
                      {ctaText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
