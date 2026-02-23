import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Baby, BookOpen, Calendar, CheckCircle, ChevronRight, ArrowRight, Sparkles, Droplets, Users, Award, Leaf, Users2, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollArrow from '@/components/ScrollArrow';
import { BaseCrudService } from '@/integrations';
import { FrequentlyAskedQuestions, BlogPosts } from '@/entities';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPosts[]>([]);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);

  useEffect(() => {
    loadFaqs();
    loadBlogPosts();
  }, []);

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

  const loadBlogPosts = async () => {
    setIsLoadingBlog(true);
    try {
      const result = await BaseCrudService.getAll<BlogPosts>('blogposts', {}, { limit: 3 });
      setBlogPosts(result.items.slice(0, 3));
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoadingBlog(false);
    }
  };

  const services = [
    {
      icon: Droplets,
      title: 'Lactation Consultation',
      description: 'Expert guidance for breastfeeding challenges, milk supply concerns, and latch issues.',
      benefits: ['Personalized feeding plans', 'Ongoing support', 'Evidence-based solutions'],
      link: '/services#lactation'
    },
    {
      icon: Heart,
      title: 'Postpartum Nutrition Support',
      description: 'Nourishing guidance for recovery, energy, and emotional well-being after birth.',
      benefits: ['Tailored nutrition plans', 'Recovery support', 'Sustainable wellness'],
      link: '/services#nutrition'
    },
    {
      icon: Baby,
      title: 'Infant Feeding & Starting Solids',
      description: 'Gentle introduction to solids and responsive feeding practices for your growing baby.',
      benefits: ['Age-appropriate guidance', 'Responsive feeding', 'Allergy awareness'],
      link: '/services#infant-feeding'
    },
    {
      icon: BookOpen,
      title: 'Prenatal Breastfeeding Prep',
      description: 'Prepare for a confident start with education and practical strategies before baby arrives.',
      benefits: ['Expectation setting', 'Practical skills', 'Community connection'],
      link: '/services#prenatal'
    },
    {
      icon: Users,
      title: 'Virtual Support Group',
      description: 'Connect with other mothers in a safe, judgment-free community space.',
      benefits: ['Peer support', 'Shared experiences', 'Ongoing connection'],
      link: '/services#support-group'
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
    <div className="min-h-screen bg-soft-cream overflow-clip selection:bg-accent-gold/20 selection:text-deep-blue">
      <Header />
      {/* HERO SECTION */}
      <section 
        ref={heroRef} 
        className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-soft-cream z-0" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-dusty-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent-gold/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="w-full max-w-[120rem] mx-auto px-5 md:px-12 lg:px-20 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center flex-1">
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-6xl md:text-7xl mb-6 leading-[1.05] font-bold lg:text-6xl text-primary">Compassionate Care for Confident Motherhood</h1>
            <p className="font-paragraph text-xl text-dusty-blue mb-4 leading-relaxed max-w-2xl font-semibold md:text-lg">
              You're not alone; LactoNourish is with you at every stage of your Feeding Journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <Link to="/community">
                <Button className="h-16 px-12 rounded-full bg-accent-gold hover:bg-accent-gold/90 text-deep-blue text-lg font-bold shadow-lg shadow-accent-gold/20 transition-all hover:scale-105 hover:shadow-xl">
                  Join the Community
                </Button>
              </Link>
            </div>

          </motion.div>

          <motion.div 
            className="lg:col-span-6 relative h-[60vh] lg:h-[90vh] w-full"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="absolute inset-0 bg-dusty-blue/10 rounded-[3rem] rotate-3 scale-95 transform origin-bottom-right" />
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-dusty-blue/20 border-[8px] border-white">
              <Image
                src="https://static.wixstatic.com/media/7adb49_a4c5c3d4e928487797357c7c5ce30b29~mv2.png?originWidth=1152&originHeight=768"
                alt="Mother gently holding and nurturing her baby in a calm environment"
                width={1200}
                className="w-full h-full object-cover scale-105"
              />

            </div>
          </motion.div>
        </div>

        {/* Scroll Arrow */}
        <div className="relative z-10 pb-8">
          <ScrollArrow targetId="trust-boxes" />
        </div>
      </section>
      {/* TRUST BOXES SECTION */}
      <section id="trust-boxes" className="w-full py-20 px-5 md:px-12 lg:px-20 bg-soft-cream">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users2, title: "Trusted by 500+ Families", description: "Supporting mothers worldwide" },
              { icon: Award, title: "Certified Lactation Counsellor (CLC)", description: "Expert guidance & care" },
              { icon: Leaf, title: "Nutritionist specializing in Maternal & Child Health", description: "Evidence-based support" },
              { icon: Smile, title: "Personalized, Culturally Aware Support", description: "Your journey, your way" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-dusty-blue/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center text-accent-gold">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-deep-blue mb-2 font-bold">{item.title}</h3>
                  <p className="font-paragraph text-sm text-dusty-blue/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHO WE SUPPORT SECTION */}
      <section id="who-support" className="w-full py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-deep-blue mb-8 font-bold">
              Who We Support
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-dusty-blue/80 max-w-2xl mx-auto">
              LactoNourish is here for families at every stage of their feeding journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Expecting Parents", 
                description: "Supporting you before your baby arrives",
                image: "https://static.wixstatic.com/media/7adb49_da11e226c21c4fe4ab58c6cd25a20cc1~mv2.png"
              },
              { 
                title: "New Mothers", 
                description: "Guiding you through breastfeeding with confidence and care",
                image: "https://static.wixstatic.com/media/7adb49_bd5881e4a06d46b5b0499a5947ab983a~mv2.png"
              },
              { 
                title: "When It's Difficult", 
                description: "Helping you find calm in challenging feeding moments with expert guidance",
                image: "https://static.wixstatic.com/media/7adb49_b24c88f18ca046f28bfb79b07c57de97~mv2.png"
              },
              { 
                title: "Starting Solids", 
                description: "Supporting you as your baby explores their first foods",
                image: "https://static.wixstatic.com/media/7adb49_672401ab3f45420784035d7fd87f926f~mv2.png"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="bg-white border-none shadow-md rounded-[2rem] h-full hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 text-center">
                    <h3 className="font-heading text-xl text-deep-blue mb-3 font-bold">{item.title}</h3>
                    <p className="font-paragraph text-base text-dusty-blue/70">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* HOW SUPPORT WORKS SECTION */}
      <section id="how-works" className="w-full py-32 bg-white relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-deep-blue mb-8 font-bold">
              How Support Works
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-dusty-blue/80 max-w-2xl mx-auto">
              A simple, supportive process designed for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: "🐣", title: "Book a Consultation", description: "Schedule a time that works for you. Virtual consultations are available worldwide." },
              { icon: "🧘", title: "Personalized Guidance", description: "Receive lactation and nutrition support that truly fits your family's needs." },
              { icon: "🚶", title: "Ongoing Support", description: "Access to community resources and continued care as you progress through your feeding journey." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-deep-blue mb-4 font-bold">{item.title}</h3>
                  <p className="font-paragraph text-base text-dusty-blue/70">{item.description}</p>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-accent-gold/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE LACTONOURISH */}
      <section id="why-choose" className="w-full py-32 bg-cream relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-deep-blue mb-8 font-bold">
              Why Choose <span className="text-accent-gold">LactoNourish</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { value: "3+", label: "Years of Experience" },
              { value: "500+", label: "Families Supported" },
              { value: "CLC", label: "Certified Lactation Counselor" },
              { value: "✓", label: "Nutritionist specializing in Maternal & Child Health" },
              { value: "🌍", label: "Virtual Support Worldwide" },
              { value: "✓", label: "Gentle, evidence-based, non-judgmental approach" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl text-accent-gold font-bold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-dusty-blue/70 font-paragraph">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-16 border-t border-dusty-blue/10 text-center max-w-3xl mx-auto"
          >
            <p className="font-paragraph text-lg md:text-xl text-dusty-blue/80 leading-relaxed">
              LactoNourish is a growing community built on trust, education, and evidence-based support. I'm here to help you and your baby thrive through every stage of your feeding journey.
            </p>
          </motion.div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section className="w-full py-32 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-accent-gold font-semibold tracking-wider uppercase text-sm mb-4 block">Services</span>
              <h2 className="font-heading text-4xl md:text-6xl text-deep-blue">
                How I Can Support You
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services">
                <Button variant="ghost" className="text-lg text-deep-blue hover:text-accent-gold hover:bg-transparent group px-0">
                  View All Services <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
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
                    <div className="absolute top-0 right-0 w-32 h-32 bg-dusty-blue/10 rounded-bl-[4rem] transition-colors group-hover:bg-dusty-blue/20" />
                    
                    <CardContent className="p-8 flex flex-col h-full relative z-10">
                      <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center mb-6 text-accent-gold group-hover:scale-110 transition-transform duration-500">
                        <service.icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="font-heading text-xl text-deep-blue mb-3 group-hover:text-accent-gold transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="font-paragraph text-sm text-dusty-blue/70 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-dusty-blue/60">
                            <span className="text-accent-gold mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-sm font-bold text-dusty-blue/50 group-hover:text-accent-gold transition-colors mt-auto">
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
      {/* ABOUT SECTION */}
      <section id="about" className="w-full py-32 bg-soft-cream">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent-gold font-semibold tracking-wider uppercase text-sm mb-4 block">About LactoNourish</span>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-8 leading-tight font-bold">
                Supporting Mother-Baby Dyads With Care & Evidence
              </h2>
              <p className="font-paragraph text-lg text-dusty-blue/80 leading-relaxed mb-6">
                LactoNourish is dedicated to supporting mothers and babies through education, guidance, and compassionate care. Every mother deserves to feel confident, nourished, and supported—without judgment or pressure.
              </p>
              <p className="font-paragraph text-lg text-dusty-blue/80 leading-relaxed">
                We believe in evidence-based practices combined with emotional support, creating a space where you can thrive. Whether you're preparing for breastfeeding, navigating challenges, or seeking postpartum nutrition guidance, LactoNourish is here to walk alongside you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl"
            >
              <Image
                src="https://static.wixstatic.com/media/7adb49_03f446c523fc405f979cc05905505fed~mv2.png?originWidth=1152&originHeight=768"
                alt="Warm, supportive environment for maternal and infant health"
                width={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* BLOG PREVIEW SECTION */}
      <section id="blog" className="w-full py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-deep-blue mb-6 font-bold">
              From the <span className="text-accent-gold">LactoNourish Journal</span>
            </h2>
            <p className="font-paragraph text-xl text-dusty-blue/70 max-w-2xl mx-auto">
              Breastfeeding education, postpartum recovery guidance, maternal nutrition support, nourishing recipes, infant feeding insights, and book reviews for empowered motherhood.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {isLoadingBlog ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-cream rounded-[2rem] animate-pulse" />
              ))
            ) : blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post._id}`} className="block group h-full">
                    <Card className="h-full bg-cream border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden group-hover:-translate-y-2">
                      {post.featuredImage && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title || 'Blog post'}
                            width={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-8">
                        {post.category && (
                          <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3 block">
                            {post.category}
                          </span>
                        )}
                        <h3 className="font-heading text-2xl text-deep-blue mb-4 group-hover:text-accent-gold transition-colors line-clamp-2 font-bold">
                          {post.title}
                        </h3>
                        <p className="font-paragraph text-dusty-blue/70 leading-relaxed line-clamp-3 mb-6">
                          {post.content}
                        </p>
                        <div className="flex items-center text-sm font-bold text-dusty-blue/50 group-hover:text-accent-gold transition-colors">
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 bg-cream rounded-[2rem]">
                <p className="font-paragraph text-lg text-dusty-blue/70">
                  Blog posts coming soon. Check back for insights and guidance.
                </p>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/blog">
              <Button className="bg-accent-gold hover:bg-accent-gold/90 text-deep-blue rounded-full px-10 py-6 font-semibold text-lg">
                Explore All Articles
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* FAQ SECTION */}
      <section id="faq" className="w-full py-32 bg-cream">
        <div className="max-w-[100rem] mx-auto px-5 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-6 font-bold">
                  Common Questions
                </h2>
                <p className="text-lg text-dusty-blue/70 mb-8">
                  Everything you need to know about consultations and what to expect.
                </p>
                <Link to="/contact">
                  <Button className="rounded-full px-8 py-6 bg-accent-gold text-deep-blue hover:bg-accent-gold/90 font-semibold">
                    Ask a Question
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {isLoadingFaqs ? (
                [1, 2, 3].map((i) => <div key={i} className="h-24 bg-white rounded-2xl animate-pulse" />)
              ) : faqs.length > 0 ? (
                faqs.map((faq, index) => (
                  <motion.div
                    key={faq._id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="group bg-white hover:bg-white/80 border border-dusty-blue/10 rounded-3xl p-8 transition-colors duration-300">
                      <h3 className="font-heading text-xl text-deep-blue mb-3 flex items-start gap-3 font-bold">
                        <span className="text-accent-gold mt-1"><CheckCircle className="w-5 h-5" /></span>
                        {faq.question}
                      </h3>
                      <p className="font-paragraph text-dusty-blue/70 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-dusty-blue/70">No FAQs available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="w-full py-24 md:py-32 px-5 md:px-12 lg:px-20">
        <div className="max-w-[100rem] mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-dusty-blue text-white">
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
                  Ready to Start Your Journey?
                </h2>
                <p className="font-paragraph text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                  Book a consultation or join our community for ongoing support and connection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/appointment">
                    <Button className="bg-accent-gold hover:bg-accent-gold/90 text-deep-blue rounded-full px-12 py-8 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                      Let's Talk
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="bg-white/20 border-white/50 hover:bg-white/30 text-white rounded-full px-12 py-8 text-xl font-semibold backdrop-blur-sm transition-all">
                      Explore Services
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
