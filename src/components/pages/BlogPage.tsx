import { Link } from 'react-router-dom';
import { Search, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPosts[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Breastfeeding', 'Postpartum', 'Nutrition', 'Baby Care'];

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, searchQuery]);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<BlogPosts>('blogposts');
      setPosts(result.items);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;

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
            Blog & Resources
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Evidence-based articles, tips, and insights for your parenting journey
          </p>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="w-full bg-muted-peach py-12">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 rounded-full border-secondary bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`rounded-full px-6 py-2 font-semibold text-sm ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && !searchQuery && selectedCategory === 'All' && (
        <section className="w-full py-16 md:py-24">
          <div className="max-w-[100rem] mx-auto px-5 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
                Featured Article
              </h2>
              <Link to={`/blog/${featuredPost._id}`}>
                <Card className="bg-background border-none shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    {featuredPost.featuredImage && (
                      <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                        <Image
                          src={featuredPost.featuredImage}
                          alt={featuredPost.title || 'Featured article'}
                          width={800}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                      {featuredPost.category && (
                        <span className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                          {featuredPost.category}
                        </span>
                      )}
                      <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                        {featuredPost.title}
                      </h3>
                      {featuredPost.content && (
                        <p className="font-paragraph text-base text-foreground leading-relaxed mb-6 line-clamp-3">
                          {featuredPost.content.substring(0, 200)}...
                        </p>
                      )}
                      {featuredPost.publishDate && (
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Calendar className="w-4 h-4" />
                          <span className="font-paragraph text-sm">
                            {format(new Date(featuredPost.publishDate), 'MMMM d, yyyy')}
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="w-full py-16 md:py-24 bg-muted-peach">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {isLoading ? null : filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post._id}`}>
                    <Card className="bg-background border-none shadow-md h-full rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                      {post.featuredImage && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <Image
                            src={post.featuredImage}
                            alt={post.title || 'Blog post'}
                            width={600}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {post.category && (
                          <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                            {post.category}
                          </span>
                        )}
                        <h3 className="font-heading text-xl text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        {post.content && (
                          <p className="font-paragraph text-sm text-foreground leading-relaxed mb-4 line-clamp-3">
                            {post.content.substring(0, 150)}...
                          </p>
                        )}
                        {post.publishDate && (
                          <div className="flex items-center gap-2 text-foreground/70">
                            <Calendar className="w-4 h-4" />
                            <span className="font-paragraph text-xs">
                              {format(new Date(post.publishDate), 'MMM d, yyyy')}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="font-paragraph text-lg text-foreground/70">
                  No articles found. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[100rem] mx-auto px-5 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest articles, tips, and resources directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full border-secondary bg-background flex-1"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold"
              >
                Subscribe
              </Button>
            </form>
            {subscribed && (
              <p className="font-paragraph text-base text-primary mt-4">
                Thank you for subscribing!
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
