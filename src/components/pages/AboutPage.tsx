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
      title: 'Certified Lactation Counselor',
      description: 'Dedicated to supporting mothers and babies through evidence-based lactation guidance'
    },
    {
      icon: BookOpen,
      title: 'Maternal Nutritionist',
      description: 'Specialized in postpartum recovery and infant nutrition with practical, compassionate support'
    },
    {
      icon: Users,
      title: '500+ Families Supported',
      description: 'Honored to have guided families across India, USA, and worldwide on their feeding journeys'
    },
    {
      icon: Heart,
      title: 'Holistic, Non-Judgmental Care',
      description: 'Supporting mothers with evidence-based guidance, practical wisdom, and deep compassion'
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
            Supporting mothers and babies with warmth, evidence, and practical wisdom
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
                <p>Motherhood is beautiful, powerful, and sometimes overwhelming. There are moments when you're unsure if you're doing it right, when feeding challenges feel isolating, or when your body and mind need extra care. That's where I come in.</p>
                <p>I'm a Certified Lactation Counselor and maternal nutritionist with over 3 years of experience supporting families through their feeding journeys. I've had the privilege of working with 500+ families across India, the USA, and worldwide through virtual consultations. Whether you're navigating breastfeeding challenges, recovering postpartum, or introducing your baby to solid foods, I'm here to guide you with evidence-based advice and genuine compassion.</p>
                <p>My approach is simple: you deserve support that feels personal, practical, and judgment-free. I combine the latest research with real-world wisdom, respecting your unique circumstances and cultural values. Beyond one-on-one consultations, I host a virtual online support group where mothers connect, share, and find community. I also offer occasional workshops on maternal and infant nutrition to help you feel confident and informed.</p>
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
      {/* My Approach Section */}
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
              My Approach
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto">
              How I support you and your family
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
              My Core Values
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Non-Judgmental Care
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    Every mother's journey is unique. I'm here to listen, support, and guide without judgment—whether you're exclusively breastfeeding, formula feeding, or combining both. Your choices matter, and you deserve respect.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Evidence-Based Support
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I combine the latest research with real-world experience to give you guidance you can trust. Every recommendation is grounded in science, but delivered with warmth and understanding for your specific situation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Practical Guidance
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I believe in solutions that work in real life. My advice is practical, actionable, and tailored to your circumstances—not one-size-fits-all recommendations that don't fit your family's needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Culturally Respectful
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I honor the rich traditions of postpartum care while integrating modern nutrition science. Whether you're following traditional practices or contemporary approaches, I work within your cultural framework with respect and understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Beyond One-on-One Support
            </h2>
            <p className="font-paragraph text-lg text-foreground max-w-3xl mx-auto mb-8">
              I believe in building community and empowering mothers through connection and education.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Virtual Support Group
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    Join a warm, welcoming community of mothers where you can share experiences, ask questions, and find support from others on similar journeys. You're never alone in this.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted-peach border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    Workshops & Education
                  </h3>
                  <p className="font-paragraph text-base text-foreground leading-relaxed">
                    I offer occasional workshops on maternal and infant nutrition, breastfeeding preparation, and postpartum recovery. Knowledge is empowerment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

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
              Let's Connect
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              Whether you have questions, need support, or just want to chat about your motherhood journey, I'm here for you. Reach out anytime—I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
