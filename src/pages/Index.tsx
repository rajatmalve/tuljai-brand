import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProductGrid from '@/components/ProductGrid';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ProductGrid showFilters={false} showViewAllButton />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
