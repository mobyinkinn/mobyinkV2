import { Stack, Typography } from "@mui/material";
import React from "react";

const Culture = [
  {
    title: "Passionate",
    description:
      "We're not just enthusiastic; we're digital dynamos! Fueling every project with an unmatched zeal for excellence.",
  },
  {
    title: "Respectful",
    description:
      "Politeness isn't just a policy; it's our personality. Navigating challenges with grace and empathy.",
  },
  {
    title: "Ownership",
    description:
      "Here, empowerment isn't a buzzword; it's our way of life. Every team member is a captain, steering us towards our shared dreams.",
  },
  {
    title: "Unified",
    description:
      "We're more than a team; we're a digital family. Trusting and collaborating seamlessly to weave magic into every experience.",
  },
];

const OurCulture = () => {
  return (
    <>
      <Stack width={"100%"} mt={10} mb={10} boxSizing={"border-box"}>
        <Stack
          width={{
            xs: "90%",
            lg: "80%",
          }}
          margin={"0 auto"}
        >
          <Stack>
            <Typography
              fontSize={{
                xs: "30px",
                lg: "40px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Our Vibrant Culture: The Heartbeat of Our Success
            </Typography>
            <Typography
              fontSize={{
                xs: "21px",
                lg: "24px",
              }}
              textAlign={"center"}
              color={"#767a86"}
            >
              Step into a world where our culture sparkles with unique
              brilliance!
            </Typography>
          </Stack>
          <Stack
            mt={3}
            gap={3}
            direction={{
              xs: "column",
              lg: "row",
            }}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {Culture.map((benefit, index) => (
              <Stack
                key={index}
                width={{
                  xs: "100%",
                  lg: "23%",
                }}
                height={{
                  xs: "auto",
                  lg: "270px",
                }}
                boxShadow={"rgba(0, 0, 0, 0.15) 0px 0px 10px 0px"}
              >
                <Stack padding={2} pt={5} gap={2}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"22px"}
                    fontWeight={"bold"}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontSize={"16px"}
                    fontWeight={"300"}
                  >
                    {benefit.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default OurCulture;
