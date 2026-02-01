import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
            Get in Touch
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Ready to start your journey? I'd love to hear from you and discuss how I can support your family.
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
                    href="mailto:hello@nurturenourish.com"
                    className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
                  >
                    hello@nurturenourish.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <p className="font-paragraph text-sm text-foreground/70 mt-2">
                    Available Mon-Fri, 9am-6pm IST
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    Location
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Mumbai, India
                  </p>
                  <p className="font-paragraph text-sm text-foreground/70 mt-2">
                    Online consultations available worldwide
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
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>

                  {submitted && (
                    <div className="bg-secondary border border-primary/20 rounded-2xl p-6 mb-8">
                      <p className="font-paragraph text-base text-foreground text-center">
                        Thank you for reaching out! I'll respond to your message soon.
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
                          placeholder="How can I help?"
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

      {/* FAQ Section */}
      <section className="w-full bg-muted-peach py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Before You Reach Out
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto">
              Here are answers to some common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    How quickly will I hear back?
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I typically respond to all inquiries within 24 hours during business days. For urgent matters, please call directly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    Do you offer virtual consultations?
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    Yes! I provide both in-person (Mumbai area) and virtual consultations via video call for families worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    What should I prepare for my first consultation?
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I'll send you a detailed intake form before our session. Come with any questions and be ready to discuss your feeding journey openly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
