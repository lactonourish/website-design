import { Award, Heart, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollArrow from '@/components/ScrollArrow';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const credentials = [
    {
      icon: Award,
      title: 'Certified Lactation Counselor (CLC)',
      description: 'Dedicated to supporting mothers and babies through evidence-based lactation guidance'
    },
    {
      icon: BookOpen,
      title: 'Nutritionist specializing in Maternal & Child Health',
      description: 'Specialized in postpartum recovery and infant nutrition with practical, compassionate support'
    },
    {
      icon: Users,
      title: '500+ Families Supported',
      description: 'Honored to have guided families through virtual consultations worldwide'
    },
    {
      icon: Heart,
      title: 'Holistic, Non-Judgmental Care',
      description: 'Supporting mothers with evidence-based guidance, practical wisdom, and deep compassion'
    }
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-5 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24 relative min-h-[60vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex-1 flex flex-col justify-center"
        >
          <h1 className="font-heading text-6xl md:text-7xl text-deep-blue mb-6 font-bold">
            About LactoNourish
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-dusty-blue max-w-3xl mx-auto">
            Supporting mothers and babies with warmth, evidence, and practical wisdom
          </p>
        </motion.div>
        
        {/* Scroll Arrow */}
        <ScrollArrow targetId="about-intro" />
      </section>
      {/* Introduction Section */}
      <section id="about-intro" className="w-full bg-cream py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-8 font-bold">About Me</h2>
              <div className="space-y-6 font-paragraph text-base md:text-lg text-dusty-blue leading-relaxed">
                <p className="font-semibold">Hi, I'm Ananyaa.</p>
                <p>I'm a Certified Lactation Counselor (CLC) and Nutritionist specializing in maternal and child health, and the heart behind LactoNourish.</p>
                <p>My journey into this field began with a deep desire to make motherhood feel less overwhelming and more supported. Over the past three years, I've had the privilege of guiding more than 500 families through breastfeeding challenges, postpartum recovery, and early infant feeding milestones.</p>
                <p>I created LactoNourish as a space where science meets compassion — where mothers and babies are supported as a dyad, and where education empowers families to make confident, informed decisions.</p>
                <p>My approach is gentle, practical, and evidence-based. I believe every feeding journey is unique, and every mother deserves care that respects her story.</p>
                <p>As this community continues to grow, my mission remains simple: to nurture, educate, and walk alongside families in one of the most transformative seasons of their lives.</p>
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
            <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-4 font-bold">
              Our Credentials & Commitment
            </h2>
            <p className="font-paragraph text-lg text-dusty-blue max-w-3xl mx-auto">
              Expertise, experience, and dedication to your family's well-being
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
                <Card className="bg-white border border-dusty-blue/10 shadow-md h-full rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                      <credential.icon className="w-8 h-8 text-accent-gold" />
                    </div>
                    <h3 className="font-heading text-xl text-deep-blue mb-3 font-bold">
                      {credential.title}
                    </h3>
                    <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                      {credential.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="w-full bg-cream py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-8 text-center font-bold">
              Our Core Values
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-white border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4 font-bold">
                    Non-Judgmental Care
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    Every mother's journey is unique. We're here to listen, support, and guide without judgment—whether you're exclusively breastfeeding, formula feeding, or combining both. Your choices matter, and you deserve respect.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4">
                    Evidence-Based Support
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    We combine the latest research with real-world experience to give you guidance you can trust. Every recommendation is grounded in science, but delivered with warmth and understanding for your specific situation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4">
                    Practical Guidance
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    We believe in solutions that work in real life. Our advice is practical, actionable, and tailored to your circumstances—not one-size-fits-all recommendations that don't fit your family's needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4">
                    Culturally Respectful
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    We honor the rich traditions of postpartum care while integrating modern nutrition science. Whether you're following traditional practices or contemporary approaches, we work within your cultural framework with respect and understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Community Section */}
      <section className="w-full py-16 md:py-24 bg-soft-cream">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-deep-blue mb-6 font-bold">
              Building Community
            </h2>
            <p className="font-paragraph text-lg text-dusty-blue max-w-3xl mx-auto mb-8">
              We believe in empowering mothers through connection, education, and shared wisdom.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-cream border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4 font-bold">
                    Virtual Support Group
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    Join a warm, welcoming community of mothers where you can share experiences, ask questions, and find support from others on similar journeys. You're never alone in this.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cream border-none shadow-md rounded-3xl">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-deep-blue mb-4 font-bold">
                    Educational Resources
                  </h3>
                  <p className="font-paragraph text-base text-dusty-blue/80 leading-relaxed">
                    We offer guidance on maternal and infant nutrition, breastfeeding preparation, and postpartum recovery. Knowledge is empowerment, and we're here to share it.
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
