import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

export default function BlogPostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPosts | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadPost();
    }
  }, [id]);

  const loadPost = async () => {
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<BlogPosts>('blogposts', id!);
      setPost(data);

      if (data?.category) {
        const allPosts = await BaseCrudService.getAll<BlogPosts>('blogposts', {}, { limit: 4 });
        const related = allPosts.items
          .filter(p => p._id !== id && p.category === data.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="w-full max-w-[100rem] mx-auto px-5 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[600px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : !post ? (
          <div className="text-center py-20">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Article Not Found
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blog">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-semibold">
                Back to Blog
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link to="/blog">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {post.category && (
                <span className="inline-block bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {post.category}
                </span>
              )}

              <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {post.publishDate && (
                <div className="flex items-center gap-2 text-foreground/70 mb-8">
                  <Calendar className="w-5 h-5" />
                  <span className="font-paragraph text-base">
                    {format(new Date(post.publishDate), 'MMMM d, yyyy')}
                  </span>
                </div>
              )}

              {/* Featured Image */}
              {post.featuredImage && (
                <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
                  <Image
                    src={post.featuredImage}
                    alt={post.title || 'Article image'}
                    width={1200}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="font-paragraph text-lg text-foreground leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>
            </motion.article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <section className="mt-24 pt-16 border-t border-secondary/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center">
                    Related Articles
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map((relatedPost, index) => (
                      <motion.div
                        key={relatedPost._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link to={`/blog/${relatedPost._id}`}>
                          <Card className="bg-background border border-secondary/30 shadow-md h-full rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                            {relatedPost.featuredImage && (
                              <div className="aspect-[16/9] overflow-hidden">
                                <Image
                                  src={relatedPost.featuredImage}
                                  alt={relatedPost.title || 'Related article'}
                                  width={600}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                            <CardContent className="p-6">
                              {relatedPost.category && (
                                <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                  {relatedPost.category}
                                </span>
                              )}
                              <h3 className="font-heading text-xl text-foreground mb-3 line-clamp-2">
                                {relatedPost.title}
                              </h3>
                              <span className="inline-flex items-center text-primary font-semibold text-sm">
                                Read More <ChevronRight className="w-4 h-4 ml-1" />
                              </span>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {/* CTA Section */}
            <section className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-secondary rounded-3xl p-12 md:p-16 text-center"
              >
                <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                  Need Personalized Support?
                </h2>
                <p className="font-paragraph text-lg text-foreground mb-8 max-w-2xl mx-auto">
                  Book a consultation to get tailored guidance for your unique situation.
                </p>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 font-semibold text-lg">
                    Book a Consultation
                  </Button>
                </Link>
              </motion.div>
            </section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
