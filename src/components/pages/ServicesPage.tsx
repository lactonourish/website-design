import { Link } from 'react-router-dom';
import { Heart, Utensils, Baby, BookOpen, Calendar } from 'lucide-react';
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
      title: '1:1 Lactation Consultations',
      description: 'Personalized support for all your breastfeeding needs',
      details: [
        'Latch assessment and correction',
        'Low milk supply concerns',
        'Painful nursing or nipple damage',
        'Pumping strategies and schedules',
        'Returning to work support',
        'Weaning guidance'
      ]
    },
    {
      id: 'nutrition',
      icon: Utensils,
      title: 'Postpartum Nutrition Support',
      description: 'Evidence-based nutrition for recovery and milk production',
      details: [
        'Personalized meal planning',
        'Galactagogue foods and supplements',
        'Managing dietary restrictions',
        'Energy and nutrient optimization',
        'Traditional postpartum foods guidance',
        'Weight management support'
      ]
    },
    {
      id: 'infant-feeding',
      icon: Baby,
      title: 'Infant Feeding Guidance',
      description: 'Expert advice for introducing solids and beyond',
      details: [
        'Starting solids (6+ months)',
        'Baby-led weaning approaches',
        'Managing food allergies',
        'Texture progression',
        'Balanced toddler nutrition',
        'Picky eating strategies'
      ]
    },
    {
      id: 'prenatal',
      icon: BookOpen,
      title: 'Prenatal Breastfeeding Education',
      description: 'Prepare for success before baby arrives',
      details: [
        'Breastfeeding basics and expectations',
        'Breast anatomy and milk production',
        'Partner support strategies',
        'Hospital preparation',
        'Common challenges and solutions',
        'Building your support network'
      ]
    },
    {
      id: 'followup',
      icon: Calendar,
      title: 'Follow-Up Support',
      description: 'Ongoing care as your needs evolve',
      details: [
        'Check-ins after initial consultation',
        'Growth monitoring support',
        'Troubleshooting new challenges',
        'Milestone guidance',
        'Transition support (back to work, weaning)',
        'Long-term feeding relationship'
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
            Comprehensive lactation and nutrition services tailored to your family's unique journey
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 font-semibold text-base">
              Book a Consultation
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
                  <p className="font-paragraph text-lg text-foreground mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                        <span className="font-paragraph text-base text-foreground">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold">
                      Book This Service
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
              Not Sure Which Service You Need?
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Let's chat about your unique situation and find the best support for your family.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 font-semibold text-lg">
                Schedule a Free Discovery Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
