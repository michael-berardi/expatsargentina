import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface Author {
  name: string;
  role: string;
  bio?: string;
  initials?: string;
}

interface AuthorBioProps {
  author: Author;
  publishedAt?: string;
  updatedAt?: string;
  readTime?: number;
  variant?: "compact" | "full" | "minimal";
}

export function AuthorBio({ 
  author, 
  publishedAt, 
  updatedAt,
  readTime,
  variant = "full" 
}: AuthorBioProps) {
  const initials = author.initials || author.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  
  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <User className="h-4 w-4" />
        <span>{author.name}</span>
        {publishedAt && (
          <>
            <span>·</span>
            <Calendar className="h-3 w-3" />
            <span>{new Date(publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
          </>
        )}
        {updatedAt && updatedAt !== publishedAt && (
          <>
            <span>·</span>
            <span>Updated {new Date(updatedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
          </>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{author.name}</span>
          <span className="text-xs text-muted-foreground">{author.role}</span>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <Card className="bg-muted/30">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-semibold">{author.name}</span>
              <Badge variant="secondary" className="text-xs">{author.role}</Badge>
            </div>
            
            {author.bio && (
              <p className="text-sm text-muted-foreground mb-3">{author.bio}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              {publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Published {new Date(publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              )}
              
              {updatedAt && updatedAt !== publishedAt && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Updated {new Date(updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              )}
              
              {readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {readTime} min read
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Pre-configured authors
export const siteAuthors = {
  editorial: {
    name: "Expats Argentina Editorial",
    role: "Research Team",
    bio: "Our editorial team combines on-the-ground experience in Buenos Aires with extensive research to provide accurate, up-to-date information for expats.",
    initials: "EA",
  },
  immigration: {
    name: "Lucero Legal Team",
    role: "Immigration Attorneys",
    bio: "Licensed Argentine immigration attorneys with 15+ years of experience helping expats navigate visas, residency, and citizenship.",
    initials: "LL",
  },
  housing: {
    name: "BA Rentals Team",
    role: "Housing Specialists",
    bio: "Local rental market experts who track neighborhood trends, pricing, and availability across Buenos Aires.",
    initials: "BR",
  },
  community: {
    name: "Expat Community Contributors",
    role: "Community Writers",
    bio: "Real expats sharing their firsthand experiences living in Argentina. Stories verified by our editorial team.",
    initials: "EC",
  },
};

// Last updated timestamp component
export function LastUpdated({ 
  date, 
  frequency = "monthly",
  showLabel = true 
}: { 
  date: string; 
  frequency?: "daily" | "weekly" | "monthly" | "quarterly";
  showLabel?: boolean;
}) {
  const frequencyLabels = {
    daily: "Updated daily",
    weekly: "Updated weekly",
    monthly: "Updated monthly",
    quarterly: "Updated quarterly",
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Clock className="h-4 w-4" />
      {showLabel && <span>{frequencyLabels[frequency]}:</span>}
      <time dateTime={date}>{formattedDate}</time>
    </div>
  );
}
