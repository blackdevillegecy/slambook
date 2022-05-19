import React, { Component, useContext } from "react";
import Slider from "react-slick";
import PhotoCard from "../../comps/PhotoCard";
import CSE from "../../comps/jsons/CSE.json";
import EE from "../../comps/jsons/EE.json";
import ME from "../../comps/jsons/ME.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { stateContext } from "../_app";

function Slide() {
  const router = useRouter();

  const settings = {
    dots: true,
    className: "center",
    autoplay: true,
    infinite: true,
    speed: 1500,
    rows: 1,
    mobileFirst: true,
    slidesPerRow: 1,
    slidesToShow: 7,
    slidesToScroll: 5,
    rows: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container style={{ background: " rgb(174, 229, 248)" }}>
      <Slider {...settings}>
        {CSE.slice(0)
          .reverse()
          .map((cse) => {
            return (
              <div
                onClick={() => router.push(`/CSE_Slider/${cse.id}`)}
                key={cse.id}
              >
                <PhotoCard {...cse} />
              </div>
            );
          })}
      </Slider>
    </Container>
  );
}

export default Slide;

const Container = styled.div`
  padding: 2rem 8rem;
  padding-bottom: 0rem;
  .slick-prev:before {
    font-size: 30px;
    z-index: 2;
  }

  .slick-next:before {
    font-size: 30px;
  }
  .slick-slide > div {
    display: grid;
    place-items: center;
    width: 80%;
    margin: auto;
    padding: 0px;
  }
  @media (max-width: 1200px) {
    padding: 3rem 6rem;
    padding-bottom: 0rem;
  }
  @media (max-width: 600px) {
    padding: 3rem 4rem;
    padding-bottom: 0rem;
  }
  @media (max-width: 350px) {
    padding: 3rem 2rem;
  }
`;
