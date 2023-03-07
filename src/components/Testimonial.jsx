import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import ImgTesti1 from "../assets/images/img_testi_1.webp";
import ImgTesti2 from "../assets/images/img_testi_2.webp";
import ImgTesti3 from "../assets/images/img_testi_3.png";
import Rate from "../assets/icons/star.svg";
import "../assets/css/Testimonial.css";
import "../assets/owl-carousel/owl.carousel.css";
import "../assets/owl-carousel/owl.theme.default.css";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="testi-head">
          <h3>Testimonial</h3>
          <h4>Berbagai review positif dari para pelanggan kami</h4>
        </div>
      </div>

      <ReactOwlCarousel className="owl-carousel">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-item">
              <div className="card-body">
                <div className="col-3">
                  <img src={ImgTesti1} alt="" />
                </div>
                <div className="col-9">
                  <div className="rate">
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h4>John Dee 32, Bromo</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-item">
              <div className="card-body">
                <div className="col-3">
                  <img src={ImgTesti2} alt="" />
                </div>
                <div className="col-9">
                  <div className="rate">
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h4>Jessica Smith 27, Jakarta</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-item">
              <div className="card-body">
                <div className="col-3">
                  <img src={ImgTesti3} alt="" />
                </div>
                <div className="col-9">
                  <div className="rate">
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                    <img src={Rate} alt="" />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <h4>Sarah Johnson 35, Bali</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </section>
  );
};

export default Testimonial;
