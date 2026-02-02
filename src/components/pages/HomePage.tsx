import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Baby, BookOpen, Calendar, CheckCircle, ChevronRight, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Testimonials, FrequentlyAskedQuestions } from '@/entities';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);

  useEffect(() => {
    loadTestimonials();
    loadFaqs();
  }, []);

  const loadTestimonials = async () => {
    setIsLoadingTestimonials(true);
    try {
      const result = await BaseCrudService.getAll<Testimonials>('testimonials', {}, { limit: 3 });
      const featured = result.items.filter(t => t.isFeatured);
      setTestimonials(featured.length > 0 ? featured : result.items.slice(0, 3));
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setIsLoadingTestimonials(false);
    }
  };

  const loadFaqs = async () => {
    setIsLoadingFaqs(true);
    try {
      const result = await BaseCrudService.getAll<FrequentlyAskedQuestions>('faq', {}, { limit: 6 });
      const featured = result.items.filter(f => f.isFeatured);
      setFaqs(featured.length > 0 ? featured.slice(0, 6) : result.items.slice(0, 6));
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setIsLoadingFaqs(false);
    }
  };

  const services = [
    {
      icon: Heart,
      title: 'Who I Support',
      description: 'New moms, expecting parents, breastfeeding challenges, starting solids',
      link: '/services#lactation'
    },
    {
      icon: Baby,
      title: 'How Support Works',
      description: 'Book a consultation → Receive personalized guidance → Ongoing support or community care',
      link: '/services#nutrition'
    },
    {
      icon: BookOpen,
      title: 'How This Helps You',
      description: 'Confidence feeding your baby, better milk supply, postpartum recovery, less stress',
      link: '/services#infant-feeding'
    },
    {
      icon: Calendar,
      title: 'Why Families Trust LactoNourish',
      description: '3+ years supporting mothers, 500+ families, CLC & nutritionist, gentle approach, worldwide',
      link: '/services#prenatal'
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-clip selection:bg-primary/20 selection:text-secondary-foreground">
      <Header />
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative w-full min-h-[95vh] flex items-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-muted-peach/50 to-background z-0" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="w-full max-w-[120rem] mx-auto px-5 md:px-12 lg:px-20 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-secondary/50 backdrop-blur-sm w-fit mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground tracking-wide uppercase">Supporting Confident Motherhood & Healthy Babies</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-secondary-foreground mb-8 leading-[1.1]">
              Confident Motherhood & <span className="text-primary italic">Healthy</span> Babies
            </h1>
            
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl">
              Evidence-based lactation and maternal nutrition support to help you feel confident, supported, and nourished through every stage of your motherhood journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <Button className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-medium shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-xl">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-14 px-10 rounded-full border-2 border-secondary text-secondary-foreground hover:bg-secondary/20 text-lg font-medium transition-all hover:scale-105 bg-transparent">
                  Join the Support Community
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-foreground/60 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary/30 overflow-hidden" />
                ))}
              </div>
              <p>Trusted by 500+ families globally</p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative h-[60vh] lg:h-[80vh] w-full"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] rotate-3 scale-95 transform origin-bottom-right" />
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-secondary/20 border-[8px] border-white">
              <Image
                src="https://static.wixstatic.com/media/7adb49_0bf652383b494591a572bd76ee26dff7~mv2.png?originWidth=1152&originHeight=768"
                alt="Mother gently holding and nurturing her baby in a calm environment"
                width={1200}
                className="w-full h-full object-cover scale-105"
              />
              
              <motion.div 
                className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-bold text-lg text-secondary-foreground">Certified Expert</span>
                </div>
                <p className="text-sm text-foreground/70 leading-snug">
                  Certified Lactation Counselor (CLC) & Maternal Nutritionist
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY FAMILIES TRUST LACTONOURISH */}
      <section className="w-full py-32 bg-white relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-secondary-foreground mb-8">
              Why Families Trust <span className="text-primary">LactoNourish</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {[
              { value: "3+", label: "Years Supporting Mothers" },
              { value: "500+", label: "Families Guided" },
              { value: "CLC", label: "Certified Lactation Counselor" },
              { value: "RD", label: "Maternal Nutritionist" },
              { value: "∞", label: "Gentle, Non-Judgmental Care" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl text-primary font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-foreground/70 font-paragraph">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-16 border-t border-secondary/30 text-center max-w-3xl mx-auto"
          >
            <p className="font-paragraph text-lg md:text-xl text-foreground/80 leading-relaxed">
              I believe every mother deserves care, reassurance, and evidence-based guidance without pressure or judgment. My role is to walk alongside you, helping you feel confident in feeding and caring for your baby in a way that feels right for your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full py-32 bg-muted-peach relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Holistic Support</span>
              <h2 className="font-heading text-4xl md:text-6xl text-secondary-foreground">
                How I Can Support You
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <Button variant="ghost" className="text-lg text-secondary-foreground hover:text-primary hover:bg-transparent group px-0">
                  View All Services <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link to={service.link} className="block h-full group">
                  <Card className="h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden relative group-hover:-translate-y-2">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[4rem] transition-colors group-hover:bg-secondary/30" />
                    
                    <CardContent className="p-8 flex flex-col h-full relative z-10">
                      <div className="w-14 h-14 bg-muted-peach rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="font-heading text-2xl text-secondary-foreground mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="font-paragraph text-foreground/70 leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-sm font-bold text-secondary-foreground/50 group-hover:text-primary transition-colors mt-auto">
                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-6">Your Path to Confidence</h2>
            <p className="text-lg text-foreground/70">Simple steps to get the support you deserve.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

            {[
              { step: "01", title: "Book Your Visit", desc: "Choose a time that works for you via our easy online scheduler." },
              { step: "02", title: "Personalized Consult", desc: "We meet virtually or in-person to address your specific needs." },
              { step: "03", title: "Thrive Together", desc: "Receive a tailored care plan and follow-up support to ensure success." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="relative text-center bg-background p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-muted-peach rounded-full flex items-center justify-center text-3xl font-heading font-bold text-primary mb-6 shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="text-2xl font-heading text-secondary-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full py-32 bg-secondary/10 overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-6xl text-secondary-foreground mb-6">
              Stories from Families
            </h2>
            <p className="font-paragraph text-xl text-foreground/70 max-w-2xl mx-auto">
              Real experiences from parents who found their way with support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {isLoadingTestimonials ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-80 bg-white/50 rounded-[2rem] animate-pulse" />
              ))
            ) : testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-none shadow-md rounded-[2rem] p-2">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                        ))}
                      </div>
                      
                      <p className="font-paragraph text-lg text-foreground/80 leading-relaxed italic mb-8 flex-grow">
                        "{testimonial.testimonialText}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary/30 flex-shrink-0">
                          {testimonial.clientPhoto ? (
                            <Image
                              src={testimonial.clientPhoto}
                              alt={testimonial.clientName || 'Client'}
                              width={48}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-primary font-bold">
                              {testimonial.clientName?.charAt(0) || 'C'}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-heading text-lg font-bold text-secondary-foreground">
                            {testimonial.clientName}
                          </h4>
                          {testimonial.serviceReceived && (
                            <p className="text-xs text-primary font-medium uppercase tracking-wide">
                              {testimonial.serviceReceived}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-white/50 rounded-[2rem]">
                <p className="font-paragraph text-lg text-foreground/70">
                  No testimonials available at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-6">
                  Common Questions
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Everything you need to know about consultations, insurance, and what to expect.
                </p>
                <Link to="/contact">
                  <Button className="rounded-full px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold">
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {isLoadingFaqs ? (
                [1, 2, 3].map((i) => <div key={i} className="h-24 bg-gray-50 rounded-2xl animate-pulse" />)
              ) : faqs.length > 0 ? (
                faqs.map((faq, index) => (
                  <motion.div
                    key={faq._id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="group bg-background hover:bg-muted-peach/30 border border-gray-100 rounded-3xl p-8 transition-colors duration-300">
                      <h3 className="font-heading text-xl text-secondary-foreground mb-3 flex items-start gap-3">
                        <span className="text-primary mt-1"><CheckCircle className="w-5 h-5" /></span>
                        {faq.question}
                      </h3>
                      <p className="font-paragraph text-foreground/70 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/70">No FAQs available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-24 md:py-32 px-5 md:px-12 lg:px-20">
        <div className="max-w-[100rem] mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-secondary text-secondary-foreground">
            <div className="absolute inset-0 opacity-10 mix-blend-multiply">
              <Image 
                src="https://static.wixstatic.com/media/7adb49_8c723510c057470cb1906aa0c15dfd78~mv2.png?originWidth=1152&originHeight=768" 
                alt="Texture" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 px-8 py-20 md:py-32 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-4xl md:text-6xl mb-8 leading-tight">
                  Ready to feel confident in your feeding journey?
                </h2>
                <p className="font-paragraph text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                  You don't have to do this alone. Expert support is just a click away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                      Book Consultation
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="bg-white/50 border-white/50 hover:bg-white text-secondary-foreground rounded-full px-12 py-8 text-xl font-semibold backdrop-blur-sm transition-all">
                      View Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
