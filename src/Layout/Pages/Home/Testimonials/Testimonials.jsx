import Title from '../SectionTitle/Title';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import "@smastrom/react-rating/style.css";
const Testimonials = () => {
  const [reviews,setReviews] = useState([]);
  useEffect(() =>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
    return (
      <div className="my-20">
        <Title subHeading="What Our CLient Says" heading="Testimonials"></Title>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-16 mx-24 flex flex-col items-center">
                {" "}
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className='px-8'>{review.details}</p>
                <p className="text-2xl text-orange-500">{review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Testimonials;