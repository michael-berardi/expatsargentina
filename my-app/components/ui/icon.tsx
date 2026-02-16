"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Import all Lucide icons used across the site
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  Briefcase,
  Building,
  Bus,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  Coffee,
  CreditCard,
  DollarSign,
  Download,
  Dumbbell,
  ExternalLink,
  FileText,
  Film,
  Gift,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Home,
  Lightbulb,
  ListOrdered,
  Mail,
  Map as MapIconLucide,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Moon,
  Music,
  Phone,
  PiggyBank,
  Plane,
  Quote,
  Receipt,
  RefreshCw,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Train,
  TrendingUp,
  User,
  Users,
  Utensils,
  Wallet,
  Wifi,
  Wine,
  X,
  Zap,
  type LucideProps,
} from "lucide-react";

/**
 * Lucero Legal Brand Icon System
 * 
 * Brand Flavor Configuration:
 * - strokeWidth: 1.5px (elegant, refined)
 * - cornerRadius: 2px (subtle refinement)
 * - endCaps: round (soft, approachable)
 * - colorTreatment: monochrome with currentColor inheritance
 * - scale: 1x standard
 * 
 * Size Variants:
 * - sm: 16px (micro, inline text)
 * - md: 24px (UI default, navigation)
 * - lg: 32px (feature cards, emphasis)
 * - xl: 48px (hero sections, major CTAs)
 */

const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// Icon name to component mapping
const iconMap = {
  "alert-circle": AlertCircle,
  "alert-triangle": AlertTriangle,
  "arrow-right": ArrowRight,
  "arrow-right-left": ArrowRightLeft,
  "briefcase": Briefcase,
  "building": Building,
  "bus": Bus,
  "calculator": Calculator,
  "calendar": Calendar,
  "camera": Camera,
  "check-circle": CheckCircle,
  "chevron-down": ChevronDown,
  "clock": Clock,
  "coffee": Coffee,
  "credit-card": CreditCard,
  "dollar-sign": DollarSign,
  "download": Download,
  "file-text": FileText,
  "film": Film,
  "globe": Globe,
  "graduation-cap": GraduationCap,
  "heart": Heart,
  "help-circle": HelpCircle,
  "home": Home,
  "lightbulb": Lightbulb,
  "list-ordered": ListOrdered,
  "mail": Mail,
  "map": MapIconLucide,
  "map-pin": MapPin,
  "menu": Menu,
  "message-circle": MessageCircle,
  "message-square": MessageSquare,
  "phone": Phone,
  "plane": Plane,
  "quote": Quote,
  "refresh": RefreshCw,
  "scale": Scale,
  "shield": Shield,
  "shield-alert": ShieldAlert,
  "shopping-cart": ShoppingCart,
  "smartphone": Smartphone,
  "sparkles": Sparkles,
  "star": Star,
  "train": Train,
  "trending-up": TrendingUp,
  "user": User,
  "users": Users,
  "utensils": Utensils,
  "wallet": Wallet,
  "wifi": Wifi,
  "x": X,
  "zap": Zap,
  "dumbbell": Dumbbell,
  "external-link": ExternalLink,
  "gift": Gift,
  "moon": Moon,
  "music": Music,
  "piggy-bank": PiggyBank,
  "receipt": Receipt,
  "search": Search,
  "wine": Wine,
};

export type IconName = keyof typeof iconMap;

export interface IconProps
  extends Omit<LucideProps, "size">,
    VariantProps<typeof iconVariants> {
  name: IconName;
  /**
   * Whether to animate the icon on hover
   * @default false
   */
  animated?: boolean;
  /**
   * Animation type
   * @default "scale"
   */
  animationType?: "scale" | "bounce" | "pulse";
}

/**
 * Brand-styled Icon component
 * 
 * Usage:
 * ```tsx
 * <Icon name="arrow-right" size="md" />
 * <Icon name="check-circle" size="lg" className="text-green-500" />
 * <Icon name="heart" size="sm" animated />
 * ```
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    { name, size, animated = false, animationType = "scale", className, ...props },
    ref
  ) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in icon map`);
      return null;
    }

    const animationClasses = animated
      ? {
          scale: "transition-transform duration-200 ease-out hover:scale-110",
          bounce: "transition-transform duration-300 ease-out hover:-translate-y-0.5",
          pulse: "transition-all duration-200 ease-out hover:opacity-80",
        }[animationType]
      : "";

    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size }), animationClasses, className)}
        strokeWidth={1.5}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };

// Export individual icon components for tree-shaking and direct usage
// Each component is pre-configured with brand styling

interface BrandIconProps extends Omit<LucideProps, "size">, VariantProps<typeof iconVariants> {
  animated?: boolean;
  animationType?: "scale" | "bounce" | "pulse";
}

const createBrandIcon = (IconComponent: React.ComponentType<LucideProps>, displayName: string) => {
  const BrandIcon = React.forwardRef<SVGSVGElement, BrandIconProps>(
    ({ size, animated = false, animationType = "scale", className, ...props }, ref) => {
      const animationClasses = animated
        ? {
            scale: "transition-transform duration-200 ease-out hover:scale-110",
            bounce: "transition-transform duration-300 ease-out hover:-translate-y-0.5",
            pulse: "transition-all duration-200 ease-out hover:opacity-80",
          }[animationType]
        : "";

      return (
        <IconComponent
          ref={ref}
          className={cn(iconVariants({ size }), animationClasses, className)}
          strokeWidth={1.5}
          {...props}
        />
      );
    }
  );
  BrandIcon.displayName = displayName;
  return BrandIcon;
};

// Export individual icons for direct imports
export const AlertCircleIcon = createBrandIcon(AlertCircle, "AlertCircleIcon");
export const AlertTriangleIcon = createBrandIcon(AlertTriangle, "AlertTriangleIcon");
export const ArrowRightIcon = createBrandIcon(ArrowRight, "ArrowRightIcon");
export const ArrowRightLeftIcon = createBrandIcon(ArrowRightLeft, "ArrowRightLeftIcon");
export const BriefcaseIcon = createBrandIcon(Briefcase, "BriefcaseIcon");
export const BuildingIcon = createBrandIcon(Building, "BuildingIcon");
export const BusIcon = createBrandIcon(Bus, "BusIcon");
export const CalculatorIcon = createBrandIcon(Calculator, "CalculatorIcon");
export const CalendarIcon = createBrandIcon(Calendar, "CalendarIcon");
export const CameraIcon = createBrandIcon(Camera, "CameraIcon");
export const CheckCircleIcon = createBrandIcon(CheckCircle, "CheckCircleIcon");
export const ChevronDownIcon = createBrandIcon(ChevronDown, "ChevronDownIcon");
export const ClockIcon = createBrandIcon(Clock, "ClockIcon");
export const CoffeeIcon = createBrandIcon(Coffee, "CoffeeIcon");
export const CreditCardIcon = createBrandIcon(CreditCard, "CreditCardIcon");
export const DollarSignIcon = createBrandIcon(DollarSign, "DollarSignIcon");
export const DownloadIcon = createBrandIcon(Download, "DownloadIcon");
export const DumbbellIcon = createBrandIcon(Dumbbell, "DumbbellIcon");
export const ExternalLinkIcon = createBrandIcon(ExternalLink, "ExternalLinkIcon");
export const FileTextIcon = createBrandIcon(FileText, "FileTextIcon");
export const FilmIcon = createBrandIcon(Film, "FilmIcon");
export const GiftIcon = createBrandIcon(Gift, "GiftIcon");
export const GlobeIcon = createBrandIcon(Globe, "GlobeIcon");
export const GraduationCapIcon = createBrandIcon(GraduationCap, "GraduationCapIcon");
export const HeartIcon = createBrandIcon(Heart, "HeartIcon");
export const HelpCircleIcon = createBrandIcon(HelpCircle, "HelpCircleIcon");
export const HomeIcon = createBrandIcon(Home, "HomeIcon");
export const LightbulbIcon = createBrandIcon(Lightbulb, "LightbulbIcon");
export const ListOrderedIcon = createBrandIcon(ListOrdered, "ListOrderedIcon");
export const MailIcon = createBrandIcon(Mail, "MailIcon");
export const MapIcon = createBrandIcon(MapIconLucide, "MapIcon");
export const MapPinIcon = createBrandIcon(MapPin, "MapPinIcon");
export const MenuIcon = createBrandIcon(Menu, "MenuIcon");
export const MessageCircleIcon = createBrandIcon(MessageCircle, "MessageCircleIcon");
export const MessageSquareIcon = createBrandIcon(MessageSquare, "MessageSquareIcon");
export const MoonIcon = createBrandIcon(Moon, "MoonIcon");
export const MusicIcon = createBrandIcon(Music, "MusicIcon");
export const PhoneIcon = createBrandIcon(Phone, "PhoneIcon");
export const PiggyBankIcon = createBrandIcon(PiggyBank, "PiggyBankIcon");
export const PlaneIcon = createBrandIcon(Plane, "PlaneIcon");
export const QuoteIcon = createBrandIcon(Quote, "QuoteIcon");
export const ReceiptIcon = createBrandIcon(Receipt, "ReceiptIcon");
export const RefreshCwIcon = createBrandIcon(RefreshCw, "RefreshCwIcon");
export const ScaleIcon = createBrandIcon(Scale, "ScaleIcon");
export const SearchIcon = createBrandIcon(Search, "SearchIcon");
export const ShieldAlertIcon = createBrandIcon(ShieldAlert, "ShieldAlertIcon");
export const ShieldIcon = createBrandIcon(Shield, "ShieldIcon");
export const ShoppingCartIcon = createBrandIcon(ShoppingCart, "ShoppingCartIcon");
export const SmartphoneIcon = createBrandIcon(Smartphone, "SmartphoneIcon");
export const SparklesIcon = createBrandIcon(Sparkles, "SparklesIcon");
export const StarIcon = createBrandIcon(Star, "StarIcon");
export const TrainIcon = createBrandIcon(Train, "TrainIcon");
export const TrendingUpIcon = createBrandIcon(TrendingUp, "TrendingUpIcon");
export const UserIcon = createBrandIcon(User, "UserIcon");
export const UsersIcon = createBrandIcon(Users, "UsersIcon");
export const UtensilsIcon = createBrandIcon(Utensils, "UtensilsIcon");
export const WalletIcon = createBrandIcon(Wallet, "WalletIcon");
export const WifiIcon = createBrandIcon(Wifi, "WifiIcon");
export const WineIcon = createBrandIcon(Wine, "WineIcon");
export const XIcon = createBrandIcon(X, "XIcon");
export const ZapIcon = createBrandIcon(Zap, "ZapIcon");

// Feature card icon wrapper with background
interface FeatureIconProps extends Omit<BrandIconProps, "name"> {
  name: IconName;
  variant?: "default" | "primary" | "secondary" | "muted";
}

const FeatureIcon = React.forwardRef<SVGSVGElement, FeatureIconProps>(
  ({ name, size = "lg", variant = "default", className, ...props }, ref) => {
    const variantClasses = {
      default: "bg-primary/10 text-primary",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      muted: "bg-muted text-muted-foreground",
    };

    return (
      <div
        className={cn(
          "rounded-lg flex items-center justify-center transition-colors duration-200",
          variantClasses[variant],
          size === "sm" && "w-8 h-8",
          size === "md" && "w-10 h-10",
          size === "lg" && "w-12 h-12",
          size === "xl" && "w-16 h-16",
          className
        )}
      >
        <Icon name={name} size={size === "xl" ? "lg" : size === "lg" ? "md" : "sm"} {...props} />
      </div>
    );
  }
);

FeatureIcon.displayName = "FeatureIcon";

export { FeatureIcon };
