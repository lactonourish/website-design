import { Award, Heart, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: 'Certified Lactation consultant',
      description: 'International Board Certified Lactation Consultant with over 8 years of experience'
    },
    {
      icon: BookOpen,
      title: 'Nutritionist',
      description: 'Specialized in maternal and infant nutrition with evidence-based approaches'
    },
    {
      icon: Users,
      title: '500+ Families Supported',
      description: 'Helped families across India and globally achieve their feeding goals'
    },
    {
      icon: Heart,
      title: 'Holistic Care',
      description: 'Integrating physical, emotional, and cultural aspects of infant feeding'
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
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
            About Me
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Passionate about empowering families through evidence-based lactation and nutrition support
          </p>
        </motion.div>
      </section>
      {/* Introduction Section */}
      <section className="w-full bg-muted-peach py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">Hello, I'm Ananyaa Mohan</h2>
              <div className="space-y-4 font-paragraph text-base text-foreground leading-relaxed">
                <p>Motherhood is powerful, beautiful — and sometimes overwhelming. My work is rooted in the belief that every mother deserves support, understanding, and reliable guidance during this transformative time.</p>
                <p>I am a Certified Lactation Counselor and maternal nutrition professional with a background in public health and clinical nutrition. Over the past three years, I have worked extensively in maternal and child health programs, supporting families with breastfeeding, nutrition, and infant care.</p>
                <p>I’ve had the privilege of counseling hundreds of mothers and caregivers, helping them make informed feeding decisions, overcome challenges, and build confidence in caring for their babies. My approach blends science, empathy, and cultural sensitivity — because no two motherhood journeys are the same. My Approach🌿 Evidence-based🤍 Non-judgmental🍼 Baby-led and mother-centered💛 Gentle, practical, and realistic</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://static.wixstatic.com/media/7adb49_2a8b72f8c5a346a2b7039a0985342fb9~mv2.jpg"
                  width={600}
                  className="w-full h-auto"
                  originWidth={4096}
                  originHeight={3072}
                  focalPointX={63.58642578125}
                  focalPointY={51.432291666666664} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Credentials Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              Credentials & Experience
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto">
              Qualified expertise to support your family's health and wellbeing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background border border-secondary/30 shadow-md h-full rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <credential.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-3">
                      {credential.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground leading-relaxed">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8 text-center">
              My Philosophy of Care
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Evidence-Based & Compassionate
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I believe in combining the latest scientific research with deep empathy and understanding. Every recommendation I make is grounded in evidence, but delivered with the warmth and support you deserve during this vulnerable time.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Culturally Sensitive
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I honor the rich traditions of Indian postpartum care while integrating modern nutritional science. Whether you're following traditional practices or seeking contemporary approaches, I respect your choices and work within your cultural framework.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Personalized Support
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    No two families are alike. I take the time to understand your unique circumstances, challenges, and goals, creating a customized care plan that works for you and your baby. Your success is my priority.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Empowerment Through Education
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    Knowledge is power. I'm committed to educating you about infant feeding and maternal nutrition so you can make informed decisions with confidence. My goal is to empower you, not create dependency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
