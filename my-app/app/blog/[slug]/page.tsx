import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Article Not Found | Expats Argentina",
    };
  }

  return {
    title: `${post.title} | Expats Argentina Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://expatsargentina.com/blog/${post.slug}`,
    },
  };
}

// Generate Table of Contents from markdown content
function generateTOC(content: string) {
  const headings = content.match(/^#{2,3} (.+)$/gm) || [];
  return headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 2;
    const text = heading.replace(/^#+ /, "");
    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return { level, text, id };
  });
}

// Convert markdown to HTML (basic implementation)
function markdownToHtml(content: string): string {
  return content
    // Headers
    .replace(/^#### (.+)$/gm, "<h4 id=\"$1\">$1</h4>")
    .replace(/^### (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return `<h3 id="${id}">${text}</h3>`;
    })
    .replace(/^## (.+)$/gm, (_, text) => {
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return `<h2 id="${id}">${text}</h2>`;
    })
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Lists
    .replace(/^\* (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n)+/g, "<ul>$&</ul>")
    // Line breaks
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(.+)$/gm, "<p>$1</p>")
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, "")
    // Tables (simplified)
    .replace(/\|(.+)\|/g, (match) => {
      if (match.includes("---")) return "";
      const cells = match.split("|").filter(c => c.trim());
      return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join("")}</tr>`;
    });
}

// Article JSON-LD structured data
function ArticleStructuredData({ post }: { post: typeof blogPosts[0] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Expats Argentina",
      logo: {
        "@type": "ImageObject",
        url: "https://expatsargentina.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://expatsargentina.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb JSON-LD
function BreadcrumbStructuredData({ post }: { post: typeof blogPosts[0] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://expatsargentina.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://expatsargentina.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://expatsargentina.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const toc = generateTOC(post.content);
  const htmlContent = markdownToHtml(post.content);

  return (
    <>
      <ArticleStructuredData post={post} />
      <BreadcrumbStructuredData post={post} />

      <article className="min-h-screen">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">
              {/* Main Content */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="capitalize">
                    {post.category.replace(/-/g, " ")}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  {post.title}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                    <span className="text-xs">({post.author.role})</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {post.updatedAt && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Updated: {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <aside className="hidden lg:block">
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h2 className="font-semibold mb-4">Table of Contents</h2>
                      <nav className="space-y-2">
                        {toc.map((item, index) => (
                          <a
                            key={index}
                            href={`#${item.id}`}
                            className={`block text-sm hover:text-primary transition-colors ${
                              item.level === 3 ? "pl-4 text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {item.text}
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </aside>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container px-4 md:px-6 -mt-4">
          <div className="relative aspect-[2/1] md:aspect-[3/1] max-h-[500px] rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-12">
            <div className="max-w-none">
              <div 
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{post.author.name}</h3>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our team of experts provides accurate, up-to-date information to help 
                    you navigate life in Argentina.
                  </p>
                </CardContent>
              </Card>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {related.readTime} min read
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </aside>
          </div>
        </div>

        {/* Navigation */}
        <div className="container px-4 md:px-6 pb-12">
          <Separator className="mb-8" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/blog">
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex gap-2">
              <Link href="/visas">
                <Button className="gap-2">
                  Explore Visas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
