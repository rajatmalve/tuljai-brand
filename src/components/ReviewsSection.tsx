import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';

type Review = {
  name: string;
  location?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  product?: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Priya Patil',
    location: 'Pune',
    rating: 5,
    quote: 'Goda masala cha flavor khup authentic ahe. Gharasarkha taste!',
    product: 'Goda Masala',
  },
  {
    name: 'Rajat Malve',
    location: 'Nagpur',
    rating: 5,
    quote: 'Papad ekdum crisp ani fresh. Packaging pan mast.',
    product: 'Urad Papad',
  },
  {
    name: 'Sneha Kulkarni',
    location: 'Mumbai',
    rating: 5,
    quote: 'Haldi powder pure aahe—colour ani aroma both great.',
    product: 'Haldi Powder',
  },
  {
    name: 'Anita Jadhav',
    location: 'Kolhapur',
    rating: 5,
    quote: 'Pickle la homemade touch aahe. Repeat order confirmed!',
    product: 'Mango Pickle',
  },
];

const Stars = ({ rating }: { rating: Review['rating'] }) => {
  return (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4" fill={i < rating ? 'currentColor' : 'none'} />
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="bg-surface py-4">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground lg:text-4xl">
            Customers Love Tuljai
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real feedback from people who tried our masalas, papads, and pickles.
          </p>
        </motion.div>

        <div className="mt-14 -mx-6 px-6">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView="auto"
            spaceBetween={16}
            loop
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={false}
            navigation={{
              prevEl: '.swiper-review-prev',
              nextEl: '.swiper-review-next',
            }}
            className="pb-6"
          >
            {REVIEWS.map((review, index) => (
              <SwiperSlide key={`${review.name}-${review.product ?? index}`} className="!w-[280px] sm:!w-[340px]">
                <div className="rounded-2xl border border-foreground/5 bg-background p-6 shadow-card">
                  <Stars rating={review.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">“{review.quote}”</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{review.name}</p>
                      {(review.location || review.product) && (
                        <p className="truncate text-xs text-muted-foreground">
                          {review.location ? review.location : ''}
                          {review.location && review.product ? ' • ' : ''}
                          {review.product ? review.product : ''}
                        </p>
                      )}
                    </div>
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 flex items-center justify-start gap-3">
            <button
              className="swiper-review-prev inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground shadow-sm transition hover:border-primary/60 hover:text-primary"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="swiper-review-next inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground shadow-sm transition hover:border-primary/60 hover:text-primary"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

