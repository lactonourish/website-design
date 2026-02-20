import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AppointmentPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-5 md:px-12 lg:px-20 bg-gradient-to-b from-cream to-soft-cream">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-deep-blue mb-6 font-bold">
              Let's Talk
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-dusty-blue/80 max-w-3xl mx-auto leading-relaxed">
              Book a consultation with Ananyaa, Certified Lactation Counsellor (CLC) and Nutritionist specializing in Maternal and Child Health. 
              <br />
              <span className="text-dusty-blue font-semibold">Your time zone will be automatically detected for your convenience.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="w-full py-16 px-5 md:px-12 lg:px-20">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] shadow-lg overflow-hidden"
          >
            {/* Calendly Embed */}
            <div 
              className="calendly-inline-widget min-h-[800px]"
              data-url="https://calendly.com/ananyaa-lactonourish"
            />
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full py-20 px-5 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-8 font-bold">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="font-heading text-xl text-deep-blue mb-3 font-bold">30-60 Minutes</h3>
                <p className="font-paragraph text-dusty-blue/70">
                  Personalized consultation tailored to your needs
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-heading text-xl text-deep-blue mb-3 font-bold">Virtual & Global</h3>
                <p className="font-paragraph text-dusty-blue/70">
                  Connect from anywhere in the world
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-heading text-xl text-deep-blue mb-3 font-bold">Instant Confirmation</h3>
                <p className="font-paragraph text-dusty-blue/70">
                  Email and SMS reminders sent automatically
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
