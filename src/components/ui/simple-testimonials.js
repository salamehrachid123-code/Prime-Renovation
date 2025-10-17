import { useState } from "react";
import { cn } from "../../lib/utils";

// Simple arrow icons
const IconArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export const SimpleTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <img
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="h-full w-full rounded-3xl object-cover object-center transition-all duration-500"
            />
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <div>
            <h3 className="text-2xl font-bold text-prime-charcoal dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {testimonials[active].designation}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-8">
              {testimonials[active].quote}
            </p>
          </div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center group/button hover:bg-prime-orange transition-colors duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center group/button hover:bg-prime-orange transition-colors duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
