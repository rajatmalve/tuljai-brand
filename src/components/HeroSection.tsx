import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import productGoda from '@/assets/product-goda.jpg';
import productHaldi from '@/assets/product-haldi.jpg';
import productPapad from '@/assets/product-papad.jpg';

const EASE = [0.25, 0.1, 0.25, 1] as const;

const HeroSection = () => {
  const slides = [
    {
      title: 'Goda Masala',
      subtitle: 'Traditional Maharashtrian spice blend',
      image: productGoda,
      badge: 'Handcrafted',
    },
    {
      title: 'Haldi Powder',
      subtitle: 'Pure sun-dried turmeric powder',
      image: productHaldi,
      badge: 'Fresh',
    },
    {
      title: 'Sun-Dried Papad',
      subtitle: 'Crispy classics made the old-fashioned way',
      image: productPapad,
      badge: 'Crisp',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel
        opts={{ loop: true, containScroll: 'trimSnaps', draggable: true, align: 'start' }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] w-full"
      >
        <CarouselPrevious
          aria-label="Previous slide"
          className="!left-3 !right-auto !top-1/2 !-translate-y-1/2 !h-10 !w-10 z-10 bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-sm"
          style={{ left: '1rem', right: 'auto' }}
        />

        <CarouselContent className="h-full w-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0 relative">
              <div className="relative h-full w-full">
                {/* 1. Changed object-fill to object-cover and matched heights */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="block h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] w-full object-cover" 
                />
                
                {/* Darker gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                  
                  {/* 2. Added Framer Motion Animation */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg rounded-2xl bg-black/30 p-8 backdrop-blur-md border border-white/10 text-center shadow-2xl"
                  >
                    <span className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 border border-orange-500/30 tracking-wide uppercase">
                      {slide.badge}
                    </span>
                    
                    <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                      {slide.title}
                    </h3>
                    
                    <p className="mt-3 text-sm md:text-base text-gray-200">
                      {slide.subtitle}
                    </p>
                    
                    {/* 3. Modern Buttons with Hover Effects */}
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <a 
                        href="/products" 
                        className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 duration-200"
                      >
                        Shop Now
                      </a>
                      <a 
                        href="/our-story" 
                        className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/80"
                      >
                        Our Story
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext
          aria-label="Next slide"
          className="!right-3 !left-auto !top-1/2 !-translate-y-1/2 !h-10 !w-10 z-10 bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-sm"
          style={{ right: '1rem', left: 'auto' }}
        />
      </Carousel>
    </section>
  );
};

export default HeroSection;