import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import Title from "../SectionTitle/Title";
const Category = () => {
  return (
    <div>
      <Title
        subHeading={"From 11.00 am to 10.00pm"}
        heading={"Order Online"}
      ></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />{" "}
          <p className="uppercase text-4xl text-center -mt-20 text-white font-semibold">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />{" "}
          <p className="uppercase text-4xl text-center -mt-20 text-white font-semibold">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />{" "}
          <p className="uppercase text-4xl text-center -mt-20 text-white font-semibold">
            Soup
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />{" "}
          <p className="uppercase text-4xl text-center -mt-20 text-white font-semibold">
            Dessert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />{" "}
          <p className="uppercase text-4xl text-center -mt-20 text-white font-semibold">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
