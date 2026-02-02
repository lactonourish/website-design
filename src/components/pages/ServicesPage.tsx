import { Link } from 'react-router-dom';
import { Heart, Utensils, Baby, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Services>('services');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const serviceCategories = [
    {
      id: 'lactation',
      icon: Heart,
      title: 'Lactation Consultation',
      description: 'Personalized support for all your breastfeeding needs',
      whatItIs: 'One-on-one guidance to help you and your baby thrive with breastfeeding. Whether you\'re just starting out or facing challenges, I\'m here to help.',
      howItHelps: 'I provide hands-on support with latch assessment, milk supply concerns, pain management, and building your confidence as a nursing mother. You\'ll leave with practical strategies tailored to your situation.',
      details: [
        'Latch assessment and correction',
        'Milk supply optimization',
        'Addressing pain or nipple damage',
        'Pumping and storage guidance',
        'Returning to work support',
        'Weaning when you\'re ready'
      ]
    },
    {
      id: 'nutrition',
      icon: Utensils,
      title: 'Postpartum Nutrition Support',
      description: 'Healing foods and energy recovery for mothers',
      whatItIs: 'Personalized nutrition guidance designed specifically for your postpartum recovery and milk production. I help you nourish your body so you can nourish your baby.',
      howItHelps: 'Through practical meal planning and food guidance, I help you recover faster, boost your energy, and support milk production naturally. You\'ll feel stronger and more capable.',
      details: [
        'Personalized meal planning',
        'Healing and galactagogue foods',
        'Managing dietary restrictions',
        'Energy and nutrient optimization',
        'Traditional postpartum foods guidance',
        'Sustainable nutrition habits'
      ]
    },
    {
      id: 'infant-feeding',
      icon: Baby,
      title: 'Infant Feeding Guidance',
      description: 'Support for solids introduction and growth',
      whatItIs: 'Expert guidance as your baby grows and their feeding needs change. From introducing solids to managing feeding concerns, I support every milestone.',
      howItHelps: 'I help you introduce solids confidently, navigate picky eating, ensure proper nutrition, and address any feeding concerns. Your baby will develop healthy eating habits and grow beautifully.',
      details: [
        'Starting solids (6+ months)',
        'Baby-led weaning approaches',
        'Managing food allergies and sensitivities',
        'Texture progression and variety',
        'Balanced toddler nutrition',
        'Gentle approaches to picky eating'
      ]
    },
    {
      id: 'prenatal',
      icon: BookOpen,
      title: 'Prenatal Breastfeeding Education',
      description: 'Prepare for success before baby arrives',
      whatItIs: 'Comprehensive preparation for breastfeeding before your baby arrives. Knowledge and confidence are your best tools for a smooth start.',
      howItHelps: 'You\'ll learn what to expect, how to prepare, and what to do in the first days and weeks. This preparation reduces anxiety and sets you up for success from day one.',
      details: [
        'Breastfeeding basics and realistic expectations',
        'Breast anatomy and milk production',
        'Partner support strategies',
        'Hospital preparation and communication',
        'Common early challenges and solutions',
        'Building your support network'
      ]
    },
    {
      id: 'support-group',
      icon: Users,
      title: 'Virtual Support Group',
      description: 'Community, connection, and shared wisdom',
      whatItIs: 'A warm, welcoming online community where mothers gather to share experiences, ask questions, and support each other. You\'re never alone in this journey.',
      howItHelps: 'Connect with other mothers, normalize your experiences, learn from each other\'s wisdom, and feel supported by a caring community. Many mothers find this to be their most valuable resource.',
      details: [
        'Weekly virtual meetings',
        'Safe space to share and ask questions',
        'Peer support and encouragement',
        'Expert guidance and resources',
        'Flexible participation',
        'Lasting friendships and connections'
      ]
    }
  ];

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
            Services & Support
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-8">
            Comprehensive lactation and nutrition support tailored to your family's unique journey
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-semibold text-base">
              Book Your Consultation
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`w-full py-16 md:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted-peach'}`}
        >
          <div className="max-w-[100rem] mx-auto px-5 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="font-paragraph text-lg text-foreground mb-6 font-semibold">
                    {category.description}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-2">What It Is</h3>
                      <p className="font-paragraph text-base text-foreground leading-relaxed">
                        {category.whatItIs}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-2">How It Helps</h3>
                      <p className="font-paragraph text-base text-foreground leading-relaxed">
                        {category.howItHelps}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-3">Includes:</h3>
                      <ul className="space-y-2">
                        {category.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                            <span className="font-paragraph text-base text-foreground">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold">
                      Book Your Consultation
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  <Card className="bg-background border-none shadow-lg rounded-3xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-secondary"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CMS Services Section */}
      {services.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="max-w-[100rem] mx-auto px-5 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                Additional Services
              </h2>
              <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto">
                Explore more specialized support options
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
              {isLoading ? null : services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-background border border-secondary/30 shadow-md h-full rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                    {service.serviceImage && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <Image src={service.serviceImage} alt={service.title || 'Service'} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl text-foreground mb-3">
                        {service.title}
                      </h3>
                      {service.shortSummary && (
                        <p className="font-paragraph text-base text-foreground mb-4 leading-relaxed">
                          {service.shortSummary}
                        </p>
                      )}
                      {service.price && (
                        <p className="font-paragraph text-lg text-primary font-semibold mb-4">
                          {service.price}
                        </p>
                      )}
                      {service.bookingLink ? (
                        <a href={service.bookingLink} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-semibold w-full">
                            Book Now
                          </Button>
                        </a>
                      ) : (
                        <Link to="/contact">
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-semibold w-full">
                            Inquire
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Let's chat about your unique situation and find the best support for your family.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 font-semibold text-lg">
                Book Your Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
