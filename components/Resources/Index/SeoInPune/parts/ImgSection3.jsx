import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img3 from "../../../../../public/assests/seo_page_img_3.jpeg";
import Image from "next/image";
const ImgSection = () => {
  return (
    <Stack width={"100%"} bgcolor={"#EBF9FD"}>
      <Stack
        width={{
          xs: "95%",
          lg: "80%",
        }}
        margin={"0 auto"}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          p={4}
          boxSizing={"border-box"}
          gap={5}
        >
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
          >
            <Image
              width={1}
              height={1}
              component="img"
              layout="responsive"
              objectFit="cover"
              src={img3}
              style={{
                borderRadius: "10px",
                boxShadow: "2px 18px 25px 10px #E5E5E5",
              }}
            />
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            gap={2}
          >
            <Typography
              fontSize={"20px"}
              fontWeight={"600"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
            >
              How Mobyink Can Contribute to the Advancement of Your SEO
              Enterprise
            </Typography>
            <Typography
              fontSize={"18px"}
              fontWeight={"300"}
              pl={{
                xs: 0,
                lg: 2,
              }}
              boxSizing={"border-box"}
              textAlign={"justify"}
            >
              With over 7 years of experience, Mobyink has helped many
              businesses improve their online presence. Our SEO services in Pune
              have boosted clients’ success by bringing in more leads and
              website visitors. Our team understands your needs and creates a
              strong strategy to get you the results you want. No matter how big
              or small your business is, our solutions can boost it. We have
              budget-friendly plans and do things like optimizing websites to
              make sure they rank high in search results. Our success stories
              show that we’re experts in web optimization, making us stand out
              in digital marketing. We provide the best SEO services in pune
              using the latest trends and tools. With extensive experience in
              digital marketing, we are the best SEO agency in pune. We
              prioritize lasting results using ethical practices, known as white
              hat process. We offer different services to help businesses
              succeed in any industry and reach any audience.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImgSection;
