import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-5 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            I'm here to support you with questions about breastfeeding, postpartum nutrition, or infant feeding. Reach out anytime—I'd love to hear from you. I typically respond within 24-48 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:lactoloves@gmail.com"
                    className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
                  >
                    lactoloves@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    Availability
                  </h3>
                  <p className="font-paragraph text-base text-foreground mb-2">
                    Virtual consultations available in India, USA, and worldwide
                  </p>
                  <p className="font-paragraph text-sm text-foreground/70">
                    Online support group for mothers
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    Join Our Community
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    Connect with other mothers in our virtual support group. Share experiences, ask questions, and find community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="bg-muted-peach border-none shadow-lg rounded-3xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                    Send a Message
                  </h2>
                  <p className="font-paragraph text-base text-foreground mb-8">
                    Have questions about breastfeeding, postpartum nutrition, or infant feeding? I'd love to help. Fill out the form below and I'll get back to you soon.
                  </p>

                  {submitted && (
                    <div className="bg-secondary border border-primary/20 rounded-2xl p-6 mb-8">
                      <p className="font-paragraph text-base text-foreground text-center">
                        Thank you for reaching out! I'll respond to your message soon. You don't have to do this alone—I'm here to support you.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-paragraph text-base text-foreground">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className="rounded-2xl border-secondary bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-paragraph text-base text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="rounded-2xl border-secondary bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-paragraph text-base text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="rounded-2xl border-secondary bg-background"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-paragraph text-base text-foreground">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What can I help with?"
                          className="rounded-2xl border-secondary bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-paragraph text-base text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your situation and how I can support you..."
                        rows={6}
                        className="rounded-2xl border-secondary bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-semibold text-base w-full md:w-auto"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warm Closing Section */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              You Don't Have to Do This Alone
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Motherhood can feel overwhelming, but you have support. Whether you're struggling with breastfeeding, navigating postpartum recovery, or wondering about your baby's feeding, I'm here for you.
            </p>
            <p className="font-paragraph text-lg text-foreground leading-relaxed">
              Reach out with your questions, concerns, or just to chat. I'm here to support you every step of the way. <span className="font-semibold">I'm here to support you.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
