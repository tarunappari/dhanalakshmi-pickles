"use client"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import styles from '@/styles/landingpage/Testimonials.module.scss'
import { testimonials } from "@/data/data";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
     <section className={`${styles.testimonialContainer} relative`}>

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mx-auto"
        >

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our family say
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[450px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={8} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={10} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={8} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;