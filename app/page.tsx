'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Star,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Palette,
  Zap,
  Users,
  Award,
  ShoppingCart,
  Eye,
  Heart,
} from "lucide-react"
import Image from "next/image"
import FlipModal from "@/components/FlipModal"
import { useState, useEffect } from "react"

export default function DesignPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      category: "Branding",
      image: "/brand-identity.jpg",
      description: "Complete brand identity for a tech startup, including logo, color palette, typography, and brand guidelines. Designed to create a memorable and cohesive visual presence across all platforms.",
      subtitle: "A complete visual identity for modern startups.",
      features: [
        "Custom logo design",
        "Color palette & typography",
        "Brand guidelines PDF",
        "Business card & stationery",
        "Social media kit"
      ],
      ctaText: "See Full Case Study",
      ctaHref: "/portfolio/brand-identity"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Web Design",
      image: "/ecommerce-website.jpg",
      description: "Modern e-commerce platform with a focus on user experience, conversion optimization, and mobile responsiveness. Includes product catalog, cart, and secure checkout.",
      subtitle: "Sell more with a beautiful, fast online store.",
      features: [
        "Custom UI/UX design",
        "Mobile-first responsive layout",
        "Product catalog & search",
        "Secure checkout integration",
        "SEO optimized"
      ],
      ctaText: "Visit Demo Store",
      ctaHref: "#"
    },
    {
      id: 3,
      title: "Mobile App UI",
      category: "App Design",
      image: "/mobile-app-ui.jpg",
      description: "Fitness tracking mobile application UI with intuitive navigation, engaging visuals, and seamless onboarding. Designed for both iOS and Android platforms.",
      subtitle: "Engaging mobile experiences for every user.",
      features: [
        "Cross-platform design",
        "Onboarding & gamification",
        "Custom iconography",
        "Dark mode support",
        "Performance optimized"
      ],
      ctaText: "See App Prototype",
      ctaHref: "#"
    },
    {
      id: 4,
      title: "Print Campaign",
      category: "Print Design",
      image: "/print-campaign.jpg",
      description: "Marketing materials for a fashion brand, including posters, flyers, and magazine ads. High-impact visuals and messaging for maximum reach.",
      subtitle: "Print that stands out in the real world.",
      features: [
        "Poster & flyer design",
        "Magazine ad layouts",
        "High-res print files",
        "Brand-consistent visuals",
        "Fast turnaround"
      ],
      ctaText: "Download Sample Pack",
      ctaHref: "#"
    },
    {
      id: 5,
      title: "Logo Collection",
      category: "Branding",
      image: "/logo-collection.jpg",
      description: "A showcase of various logo designs for different clients and industries, demonstrating versatility and creativity in brand marks.",
      subtitle: "Distinctive logos for every vision.",
      features: [
        "Versatile logo concepts",
        "Monogram & wordmark styles",
        "Vector & raster formats",
        "Brand color variations",
        "Client collaboration"
      ],
      ctaText: "View Logo Gallery",
      ctaHref: "#"
    },
    {
      id: 6,
      title: "Social Media Kit",
      category: "Digital Marketing",
      image: "/social-media-kit.jpg",
      description: "Complete social media template package for consistent branding across platforms. Includes post templates, story layouts, and highlight covers.",
      subtitle: "Grow your brand on every platform.",
      features: [
        "Instagram & Facebook templates",
        "Story & highlight covers",
        "Editable files included",
        "Brand color integration",
        "Ready-to-use exports"
      ],
      ctaText: "Download Free Kit",
      ctaHref: "#"
    },
  ]

  const services = [
    {
      title: "Print Design",
      description: "Professional print materials including brochures, flyers, and posters",
      price: "$199",
      features: ["Custom design", "Print-ready files", "Multiple formats", "Fast turnaround"],
      popular: false,
    },
    {
      title: "Logo Design",
      description: "Professional logo design with 3 concepts and unlimited revisions",
      price: "$299",
      features: ["3 Initial concepts", "Unlimited revisions", "Vector files included", "Brand guidelines"],
      popular: false,
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity package including logo, colors, and guidelines",
      price: "$799",
      features: ["Logo design", "Color palette", "Typography selection", "Brand guidelines", "Business card design"],
      popular: true,
    },
    {
      title: "Website Design",
      description: "Custom website design with responsive layout and modern aesthetics",
      price: "$1,299",
      features: ["Custom design", "Responsive layout", "Up to 5 pages", "SEO optimized", "Mobile friendly"],
      popular: false,
    },
  ]

  const [modalIndex, setModalIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const sectionId = target.getAttribute("href")?.slice(1);
        const section = sectionId && document.getElementById(sectionId);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <Image src="/nuax-log.png" alt="nuax logo" height={12} width={52}/>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <Button>Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Creative Design Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We transform your ideas into stunning visual experiences. From brand identity to digital design, we craft
            solutions that make your business stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Button size="lg" className="text-lg px-8 hover:cursor-pointer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Services
              </Button>
            </a>
            <a href="#portfolio" onClick={e => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-background text-foreground hover:cursor-pointer">
                <Eye className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses transform their visual identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => setModalIndex(idx)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
                {modalIndex === idx && (
                  <FlipModal
                    open={modalIndex === idx}
                    onClose={() => setModalIndex(null)}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    subtitle={item.subtitle}
                    features={item.features}
                    ctaText={item.ctaText}
                    ctaHref={item.ctaHref}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional design services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About nuax</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a creative design studio passionate about bringing your vision to life. With over 5 years of
                experience, we specialize in creating memorable brand identities, stunning websites, and impactful
                marketing materials.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines creativity with strategic thinking to deliver designs that not only look amazing but
                also drive results for your business.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">Quick turnaround times</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Skilled professionals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Recognized excellence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">5-Star Reviews</h3>
                    <p className="text-sm text-muted-foreground">Client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/design-team.jpg"
                alt="Design team at work"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input id="service" placeholder="Logo Design, Website, etc." />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={4} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Send Message</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>hello@nuax.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Design Street, Creative City, CC 12345</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Free Consultation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute consultation to discuss your project needs
                </p>
                <Button variant="outline" className="bg-background text-foreground">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/nuax-log.png" alt="nuax logo" height={12} width={52}/>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating stunning visual experiences that make your business stand out.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Logo Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Website Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">
                    Print Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 nuax. All rights reserved.</p>
            <p>Made with ❤️ for creative businesses</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
