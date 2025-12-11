
import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const TestimonialData = [
    {
      image: assets.testimonial_image_1,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      testimonial:
        "I've rented cars from various companies, but the experience with CarRental was exceptional.",
        
    },
    {
      image: assets.testimonial_image_1,
      name: "John Smith",
      location: "New York, USA",
      testimonial:
        "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!",
    },
    {
      image: assets.testimonial_image_1,
      name: "Ava Johnson",
      location: "Sydney, Australia",
      testimonial:
        "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
    },
  ];

  return (
    <div className="py-20 px-5 bg-gray-50 text-center">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">
        {TestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-14 h-14 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 justify-start">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-left leading-relaxed">
              “{testimonial.testimonial}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;   
