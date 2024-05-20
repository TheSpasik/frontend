import React from "react";
import "../../styles/testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import avatar00 from "../../assets/img/illia.png";
import avatar01 from "../../assets/img/yura.png";
import avatar02 from "../../assets/img/ruslan.png";
import avatar03 from "../../assets/img/vadym.png";
import avatar04 from "../../assets/img/kirill.png";
import avatar05 from "../../assets/img/nikita.png";
import avatar06 from "../../assets/img/sasha.png";
import avatar07 from "../../assets/img/pipiv.png";
import avatar08 from "../../assets/img/limon.png";
import avatar09 from "../../assets/img/oleg.png";

function Testimonial() {
  return (
    <>
      <section id="reviews">
        <div className="container sliders">
          <h2 className="section__title">Reviews</h2>{" "}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar00} alt="" />
                </div>
                <h4>
                  Illia Spasonov{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym is a hub of motivation and achievement! From the moment
                  you walk in, the air is charged with determination. The
                  trainers are highly knowledgeable, the equipment is
                  first-rate, and the community is extremely supportive.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>
                  Yuri Surovkin{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym is a powerhouse of motivation and results! From the
                  moment you step in, the atmosphere buzzes with determination.
                  The trainers are knowledgeable, the equipment top-notch, and
                  the community incredibly supportive.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>
                  Ruslan Veseliev
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  I've tried many gyms, but Brogym stands out for its
                  no-nonsense approach to getting fit. The workouts are
                  challenging, the facilities are pristine, and the staff is
                  always ready to push you to your limits.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar03} alt="" />
                </div>
                <h4>
                  Vadym Naymeiko
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym exceeded all my expectations! The energy in this place
                  is contagious, making every workout feel like a personal
                  victory. Whether you're a beginner or a seasoned athlete,
                  there's something for everyone here.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar04} alt="" />
                </div>
                <h4>
                  Kyrylo Nedostypchenko{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym is more than just a place to work out; it's a community
                  where you find motivation, support, and friendships that push
                  you to be your best self.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar05} alt="" />
                </div>
                <h4>
                  Nikita Kitovich{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  As a newcomer to brogym, I was initially intimidated, but the
                  welcoming atmosphere and encouragement from fellow gym-goers
                  helped me feel right at home.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar06} alt="" />
                </div>
                <h4>
                  Oleksandr Hlopchenko{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  The energy at brogym is contagious! Whether you're lifting
                  heavy or just starting out, there's a sense of shared
                  determination that keeps you coming back for more.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar07} alt="" />
                </div>
                <h4>
                  Vladyslav Pipiv{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym isn't just about physical fitness; it's also about
                  mental toughness. The challenges you face in the gym translate
                  to real-life resilience and confidence
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar08} alt="" />
                </div>
                <h4>
                  Igor Limon{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  I've tried other gyms, but nothing compares to the vibe at
                  brogym. It's not just a place to train; it's a lifestyle that
                  promotes discipline, health, and personal growth.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar09} alt="" />
                </div>
                <h4>
                  Oleg Saksafonov{" "}
                  <span>
                    Rating:
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </span>
                </h4>
                <p>
                  Brogym culture isn't for everyone, but for those who embrace
                  it, the rewards are endless. It's not just about building
                  muscles; it's about building a stronger, better version of
                  yourself.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
