"use client";
import React from "react";
import { motion } from "framer-motion";


export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-[#fbf6eb]"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="rounded-3xl border border-gray-200 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 max-w-xs w-full"
                  style={{ padding: '2rem',backgroundColor:'#F5E6C8' }}
                  key={i}
                >
                  <div
                    className="text-gray-700 leading-relaxed text-sm"
                    style={{ marginBottom: '1.5rem' }}
                  >
                    {text}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900 tracking-tight leading-5">{name}</div>
                      <div className="text-gray-500 text-xs tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;