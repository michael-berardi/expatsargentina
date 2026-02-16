import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircleIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  BuildingIcon,
  CheckCircleIcon,
  ClockIcon,
  DollarSignIcon,
  DownloadIcon,
  FileTextIcon,
  GlobeIcon,
  HeartIcon,
  HomeIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PlaneIcon,
  ShieldIcon,
  UsersIcon,
  XIcon,
  FeatureIcon,
} from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Icon Style Guide - Expats Argentina",
  description: "Icon system documentation and style guide for Expats Argentina.",
  robots: {
    index: false,
    follow: false,
  },
};

const allIcons = [
  { name: "alert-circle", component: AlertCircleIcon, label: "Alert" },
  { name: "arrow-right", component: ArrowRightIcon, label: "Arrow" },
  { name: "briefcase", component: BriefcaseIcon, label: "Work" },
  { name: "building", component: BuildingIcon, label: "Building" },
  { name: "check-circle", component: CheckCircleIcon, label: "Check" },
  { name: "clock", component: ClockIcon, label: "Time" },
  { name: "dollar-sign", component: DollarSignIcon, label: "Money" },
  { name: "download", component: DownloadIcon, label: "Download" },
  { name: "file-text", component: FileTextIcon, label: "Document" },
  { name: "globe", component: GlobeIcon, label: "Global" },
  { name: "heart", component: HeartIcon, label: "Health" },
  { name: "home", component: HomeIcon, label: "Home" },
  { name: "mail", component: MailIcon, label: "Email" },
  { name: "map-pin", component: MapPinIcon, label: "Location" },
  { name: "menu", component: MenuIcon, label: "Menu" },
  { name: "plane", component: PlaneIcon, label: "Travel" },
  { name: "shield", component: ShieldIcon, label: "Security" },
  { name: "users", component: UsersIcon, label: "People" },
  { name: "x", component: XIcon, label: "Close" },
];

const sizeExamples = [
  { size: "sm", label: "Small (16px)", usage: "Inline text, badges" },
  { size: "md", label: "Medium (24px)", usage: "UI default, navigation" },
  { size: "lg", label: "Large (32px)", usage: "Feature cards, emphasis" },
  { size: "xl", label: "Extra Large (48px)", usage: "Hero sections, major CTAs" },
];

export default function IconGuidePage() {
  return (
    <div className="flex flex-col min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Design System
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Icon Style Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lucero Legal brand icon system based on Lucide React with consistent 
            styling and premium animations.
          </p>
        </div>

        {/* Brand Flavor */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Brand Flavor Configuration</CardTitle>
            <CardDescription>
              The Lucide-based icon system uses these consistent brand settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Stroke Width</div>
                <div className="text-2xl font-bold text-primary">1.5px</div>
                <div className="text-sm text-muted-foreground">Elegant, refined</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Corner Radius</div>
                <div className="text-2xl font-bold text-primary">2px</div>
                <div className="text-sm text-muted-foreground">Subtle refinement</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">End Caps</div>
                <div className="text-2xl font-bold text-primary">Round</div>
                <div className="text-sm text-muted-foreground">Soft, approachable</div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-1">Color</div>
                <div className="text-2xl font-bold text-primary">currentColor</div>
                <div className="text-sm text-muted-foreground">Inherits from parent</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Size Variants</CardTitle>
            <CardDescription>
              Four standard sizes for different contexts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {sizeExamples.map((example) => (
                <div key={example.size} className="flex items-center gap-8">
                  <div className="w-32">
                    <div className="font-semibold">{example.label}</div>
                    <div className="text-sm text-muted-foreground">{example.usage}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <GlobeIcon size={example.size as "sm" | "md" | "lg" | "xl"} />
                    <HeartIcon size={example.size as "sm" | "md" | "lg" | "xl"} />
                    <ShieldIcon size={example.size as "sm" | "md" | "lg" | "xl"} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Icon Library */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Icon Library</CardTitle>
            <CardDescription>
              All available icons in the Lucero Legal design system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <icon.component size="md" />
                  <div className="text-xs text-muted-foreground text-center">
                    {icon.label}
                  </div>
                  <code className="text-[10px] bg-muted px-1 rounded">
                    {icon.name}
                  </code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feature Icons */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Feature Card Icons</CardTitle>
            <CardDescription>
              Icons with background for feature cards and emphasis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-3">
                <FeatureIcon name="globe" variant="default" />
                <span className="text-sm text-muted-foreground">Default</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FeatureIcon name="heart" variant="primary" />
                <span className="text-sm text-muted-foreground">Primary</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FeatureIcon name="shield" variant="secondary" />
                <span className="text-sm text-muted-foreground">Secondary</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FeatureIcon name="building" variant="muted" />
                <span className="text-sm text-muted-foreground">Muted</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Animations */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Icon Animations</CardTitle>
            <CardDescription>
              Subtle hover animations for premium feel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-3">
                <HeartIcon size="lg" animated animationType="scale" />
                <span className="text-sm text-muted-foreground">Scale</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <ArrowRightIcon size="lg" animated animationType="bounce" />
                <span className="text-sm text-muted-foreground">Bounce</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <GlobeIcon size="lg" animated animationType="pulse" />
                <span className="text-sm text-muted-foreground">Pulse</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <ShieldIcon size="lg" />
                <span className="text-sm text-muted-foreground">No Animation</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Animations respect <code>prefers-reduced-motion</code> for accessibility
            </p>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              Common icon patterns across the site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Badge with icon */}
              <div className="flex items-center gap-4">
                <Badge variant="secondary">
                  <GlobeIcon size="sm" className="mr-1" />
                  Updated 2025
                </Badge>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  {`<Badge><GlobeIcon size="sm" /> Updated 2025</Badge>`}
                </code>
              </div>

              {/* Feature card */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileTextIcon size="md" className="text-primary" />
                </div>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  {`<div className="bg-primary/10"><FileTextIcon size="md" className="text-primary" /></div>`}
                </code>
              </div>

              {/* Button with icon */}
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  Learn more
                  <ArrowRightIcon size="sm" />
                </button>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  {`<Button>Learn more <ArrowRightIcon size="sm" /></Button>`}
                </code>
              </div>

              {/* List item with icon */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon size="sm" className="text-green-500" />
                  <span>Verified information</span>
                </div>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  {`<CheckCircleIcon size="sm" className="text-green-500" />`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Gates */}
        <Card>
          <CardHeader>
            <CardTitle>Quality Gates</CardTitle>
            <CardDescription>
              Checklist before any icon goes live
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Matches Lucide stroke weight (1.5px)",
                "Uses same corner radius (2px)",
                "Has round end caps",
                "Readable at 16px",
                "Balanced at 24px",
                "No visual clash with neighboring icons",
                "Color inherits properly",
                "Works in both light and dark modes",
                "Screen reader accessible",
                "Respects prefers-reduced-motion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircleIcon size="sm" className="text-green-500" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
