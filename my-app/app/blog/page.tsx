import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getFeaturedPosts, getAllCategories } from "@/lib/data/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Expats Argentina - Guides, Tips & Insights",
  description: "Expert guides and articles for expats moving to Argentina. Visa guides, cost of living, neighborhoods, culture, and practical advice from local experts.",
  keywords: ["expats argentina blog", "living in argentina tips", "argentina visa guide", "buenos aires expat", "move to argentina"],
  openGraph: {
    title: "Expats Argentina Blog - Expert Guides & Tips",
    description: "Comprehensive guides for expats moving to Argentina. Visa advice, cost of living breakdowns, neighborhood guides, and cultural insights.",
    type: "website",
  },
  alternates: {
    canonical: "https://expatsargentina.com/blog",
  },
};

// JSON-LD structured data for Blog
function BlogStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Expats Argentina Blog",
    description: "Expert guides and articles for expats moving to Argentina",
    url: "https://expatsargentina.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Expats Argentina",
      logo: {
        "@type": "ImageObject",
        url: "https://expatsargentina.com/images/logo.png"
      }
    },
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://expatsargentina.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author.name
      },
      image: post.image,
      keywords: post.tags.join(", ")
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <>
      <BlogStructuredData />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">Expert Insights</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Expats Argentina Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Comprehensive guides, practical tips, and insider knowledge for anyone 
                considering a move to Argentina. From visa applications to finding your 
                perfect neighborhood.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Link key={category.slug} href={`#${category.slug}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {category.name} ({category.count})
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Featured Articles</h2>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90">
                        {post.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-muted-foreground">
                          By {post.author.name}
                        </span>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="gap-1">
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Card key={category.slug} className="group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <Link href={`/resources?category=${category.slug}`} className="block">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} article{category.count !== 1 ? "s" : ""}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Move to Argentina?</h2>
              <p className="text-muted-foreground mb-6">
                Get personalized advice and connect with other expats in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/visas">
                  <Button size="lg">Explore Visa Options</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
