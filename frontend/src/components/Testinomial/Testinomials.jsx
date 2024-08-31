import React from "react";
import Slider from "react-slick";
import av01 from "../../assets/images/ava-1.jpg";
import av02 from "../../assets/images/ava-2.jpg";
import av03 from "../../assets/images/ava-3.jpg";

const Testinomials = () => {
    const settings = {
        dots: true,
        infinite : true,
        autoplay: true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
                {
                    breakpoint:576,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,

                    },
                },
            
        ]
    }

  return (
    <Slider {...settings}>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av01} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Avneesh </h6>
        <p>Customer</p>
      </div>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av02} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Harshita</h6>
        <p>Customer</p>
      </div>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av03} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Nikhil</h6>
        <p>Customer</p>
      </div>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av03} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Bhushan</h6>
        <p>Customer</p>
      </div>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av03} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Nishant</h6>
        <p>Customer</p>
      </div>
      <div className="testinomial py-4 px-3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sed
          dolorum atque dolores dolor ducimus eveniet magnam commodi a optio.
        </p>
        <div className="d-flex align-iems-center gap-4 mt-3">
          <img src={av03} alt="ava01" className="w-25 h-25 rounded-2" />
        </div>
        <h6 className="mb-0 mt-3">Nishant</h6>
        <p>Customer</p>
      </div>
    </Slider>
  );
};

export default Testinomials;
