import {
  Heading,
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  keyframes,
  Flex,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import Card from "./Card";

const slideBtoTInAnimation = keyframes`
   from {
      transform: translateY(100%);
      opacity:0;
    }
    to {
      transform: translateX(0%);
      opacity:1;
    }
  
`;

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
  ],
};

export default function Cards() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "/api/data";
        const res = await fetch(url);
        const jsonRes = await res.json();
        // console.log(jsonRes);

        setTimeout(() => {
          setCardData(jsonRes);
          setLoading(false);
        }, 3000);

        // return jsonRes;
      } catch (e) {
        console.log(e as Error);
      }
    };
    getData();
  }, []);

  const { ref: myRef, inView: ElementIsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const slideBtoTAnimation = `${slideBtoTInAnimation} 1s forwards`;

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <Flex
      direction="column"
      ref={myRef}
      animation={`${ElementIsVisible ? slideBtoTAnimation : ""} `}
      style={{ opacity: 0 }}
      mt={{ base: "16", lg: "24" }}
    >
      <Heading
        textAlign="center"
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        bgGradient="linear(to-l, red.600, red.500, red.600)"
        bgClip="text"
      >
        Specialized Courses
      </Heading>
      <Text
        textAlign="center"
        pt="5"
        fontSize={{ base: "15", md: "20", lg: "15" }}
        mx={{ base: "2" }}
      >
        After completing the core courses in first two quarters the participants
        will select one or more specializations consisting of two courses each
      </Text>

      <Box
        position={"relative"}
        height={"600px"}
        width={"100%"}
        overflow={"hidden"}
        paddingLeft={{ base: "20px", md: "40px", lg: "100px" }}
        paddingRight={{ base: "15px", md: "10px", lg: "100px" }}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {loading == true ? (
            <>
              <Skeleton height={20} />
              <Spinner />
            </>
          ) : (
            cardData.map((data, key) => {
              return <Card props={data} key={data["id"]} />;
            })
          )}
        </Slider>
      </Box>
    </Flex>
  );
}
