import { QREntryAnimation } from "@/components/QREntryAnimation";
import { Header } from "@/components/Header";
import { VideoCarousel } from "@/components/VideoCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

// Sample data - replace with actual data from API or CMS
const sampleVideos = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=800&fit=crop",
    title: "Product Launch 2024",
    duration: "0:45",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=800&fit=crop",
    title: "Behind The Scenes",
    duration: "1:20",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=800&fit=crop",
    title: "Team Collaboration",
    duration: "0:58",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=800&fit=crop",
    title: "Innovation Lab",
    duration: "1:05",
  },
  {
    id: "5",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=800&fit=crop",
    title: "Client Success Story",
    duration: "1:15",
  },
];

const samplePhotos = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
    title: "Creative Workspace",
    description: "Our modern office environment",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop",
    title: "Product Design",
    description: "Award-winning design process",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop",
    title: "Team Meeting",
    description: "Collaboration in action",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop",
    title: "Innovation Hub",
    description: "Where ideas come to life",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop",
    title: "Client Presentation",
    description: "Delivering excellence",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
    title: "Strategic Planning",
    description: "Building the future",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop",
    title: "Workshop Session",
    description: "Learning and growing together",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=800&fit=crop",
    title: "Creative Brainstorm",
    description: "Ideas that inspire",
  },
];

const sampleProducts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    title: "Premium Wireless Headphones",
    price: 12999,
    currency: "₹",
    shortDescription: "High-fidelity sound with active noise cancellation",
    fullDescription: "Experience superior audio quality with our premium wireless headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and comfortable over-ear design perfect for all-day listening.",
    specs: ["Active Noise Cancellation", "30-hour battery life", "Bluetooth 5.0", "Foldable design", "Premium leather cushions"],
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    title: "Smart Watch Pro",
    price: 24999,
    currency: "₹",
    shortDescription: "Advanced fitness tracking with heart rate monitoring",
    fullDescription: "Stay connected and healthy with our Smart Watch Pro. Track your fitness goals, monitor your health metrics, and receive notifications all from your wrist.",
    specs: ["Heart rate monitor", "GPS tracking", "Water resistant (5ATM)", "7-day battery life", "Multiple sport modes"],
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
    title: "Designer Sunglasses",
    price: 8999,
    currency: "₹",
    shortDescription: "UV protection with polarized lenses",
    fullDescription: "Stylish and protective designer sunglasses with polarized lenses that eliminate glare and provide 100% UV protection.",
    specs: ["Polarized lenses", "UV400 protection", "Lightweight titanium frame", "Scratch-resistant coating", "Includes premium case"],
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
    title: "Leather Backpack",
    price: 7499,
    currency: "₹",
    shortDescription: "Handcrafted genuine leather with laptop compartment",
    fullDescription: "Elegant and durable leather backpack crafted from premium genuine leather. Features multiple compartments including a padded laptop sleeve.",
    specs: ["Genuine leather", "15.6\" laptop compartment", "Multiple pockets", "Adjustable straps", "Water-resistant"],
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&h=800&fit=crop",
    title: "Portable Speaker",
    price: 4999,
    currency: "₹",
    shortDescription: "360° sound with waterproof design",
    fullDescription: "Take your music anywhere with this compact yet powerful portable speaker. Waterproof design makes it perfect for outdoor adventures.",
    specs: ["360° sound", "IPX7 waterproof", "12-hour battery", "Bluetooth 5.0", "Built-in microphone"],
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=800&fit=crop",
    title: "Mechanical Keyboard",
    price: 9999,
    currency: "₹",
    shortDescription: "RGB backlit with tactile switches",
    fullDescription: "Elevate your typing experience with our premium mechanical keyboard. Features customizable RGB lighting and satisfying tactile feedback.",
    specs: ["Mechanical switches", "RGB backlighting", "Programmable keys", "Aluminum frame", "Detachable USB-C cable"],
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
    title: "Minimalist Wallet",
    price: 2999,
    currency: "₹",
    shortDescription: "RFID blocking slim design",
    fullDescription: "Keep your cards secure with this sleek minimalist wallet. RFID blocking technology protects your information while maintaining a slim profile.",
    specs: ["RFID protection", "Holds 8-12 cards", "Premium leather", "Slim design", "Money clip included"],
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=800&fit=crop",
    title: "Wireless Mouse",
    price: 3499,
    currency: "₹",
    shortDescription: "Ergonomic design with precision tracking",
    fullDescription: "Work comfortably for hours with our ergonomic wireless mouse. Precision tracking and programmable buttons boost your productivity.",
    specs: ["Ergonomic design", "2400 DPI sensor", "6 programmable buttons", "Rechargeable battery", "Universal compatibility"],
  },
];

const socialLinks = [
  { platform: "Instagram", url: "https://instagram.com", icon: "instagram" as const },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" as const },
  { platform: "YouTube", url: "https://youtube.com", icon: "youtube" as const },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" as const },
  { platform: "Website", url: "https://example.com", icon: "website" as const },
  { platform: "Email", url: "mailto:hello@example.com", icon: "email" as const },
];

const Index = () => {
  return (
    <QREntryAnimation>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Header
            brandName="Fascino AI"
            brandTagline="Empowering brands with innovative digital experiences"
          />

          <div className="space-y-16 mt-12">
            <VideoCarousel videos={sampleVideos} />
            
            <ProductShowcase 
              products={sampleProducts} 
              whatsappNumber="1234567890"
            />
            
            <PhotoGallery photos={samplePhotos} />
            
            <SocialLinks links={socialLinks} />
            
            <AboutSection
              title="Innovating Digital Experiences"
              description="Fascino AI is at the forefront of digital innovation, creating seamless experiences that bridge the physical and digital worlds. Through QR technology and cutting-edge design, we help brands tell their stories in powerful, interactive ways."
              mission="To revolutionize how brands connect with their audience through innovative technology and beautiful design."
            />
            
            <ContactSection
              contactInfo={{
                email: "hello@fascino.ai",
                phone: "+1 (555) 123-4567",
                address: "123 Innovation Street, Tech Valley, CA 94000",
              }}
            />
          </div>

          <footer className="mt-20 py-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Fascino AI. Powered by QR Portfolio.
            </p>
          </footer>
        </div>
      </div>
    </QREntryAnimation>
  );
};

export default Index;
