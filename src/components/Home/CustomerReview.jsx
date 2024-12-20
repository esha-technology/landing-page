import React, { useState } from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import Heading from "../Common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const CustomerReview = () => {
  const reviews = [
    {
      name: "Emma Scott",
      rating: 5,
      comment:
        "This service exceeded my expectations! The attention to detail and customer support were outstanding. They really took the time to ensure everything was perfect. Highly recommend this company to anyone looking for quality and reliability in their service.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Liam Turner",
      rating: 4,
      comment:
        "Great service, but there’s room for improvement. The team was friendly, and the service was delivered on time. However, I feel the communication could have been slightly better. Overall, I will likely use them again in the future, but there are small areas they can improve.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Sophia Green",
      rating: 5,
      comment:
        "I am genuinely impressed by how easy the whole process was! The team was very responsive, and every detail was covered with care. The final result was exactly what I had hoped for, and even better than I expected. This is exactly the type of service I've been looking for. I'll definitely be a repeat customer!",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Olivia Hayes",
      rating: 5,
      comment:
        "Quick, efficient, and just what I needed. The team responded to all my questions quickly and made sure everything was delivered on time. The product quality is top-notch, and I am really satisfied with the results. If you're looking for a reliable service provider, this is the one to go for. Thanks again!",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
    {
      name: "Benjamin Martinez",
      rating: 4,
      comment:
        "Pretty good overall, though some minor improvements could be made. The service was good, and the product met my needs, but I think the team could improve on the speed of delivery. Communication was solid, and I felt well-supported throughout the process. I’d be happy to use this service again in the future, but a faster turnaround would be appreciated.",
      profileImg:
        "https://www.shutterstock.com/image-vector/unknown-person-female-silhouette-260nw-217557157.jpg",
    },
  ];

  // State to track how many reviews to show
  const [visibleReviews, setVisibleReviews] = useState(3);

  // Function to show more reviews
  const showMore = () => {
    setVisibleReviews(reviews.length); // Show all reviews
  };

  // Function to show less reviews
  const showLess = () => {
    setVisibleReviews(6); // Show only the first 6 reviews
  };

  return (
    <section className="my-20">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Heading heading="What Our Clients Thinks" color="bg-orange-100" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <CustomerReviewCard
                  name={review.name}
                  comment={review.comment}
                  profileImg={review.profileImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
