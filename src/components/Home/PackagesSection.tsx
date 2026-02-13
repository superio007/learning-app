import {
  Box,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Button,
} from "@mantine/core";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Package } from "../../types/Packages";
const Packages = () => {
  const Packges: Package[] = [
    {
      image: "https://ik.imagekit.io/uh2wib2rn/Fin100X/012-blackboards.svg",
      title: "Certified Teacher",
      description: "The gradual accumulation of information about",
    },
    {
      image: "https://ik.imagekit.io/uh2wib2rn/Fin100X/013-telescope-1.svg",
      title: "Expert instruction",
      description: "The gradual accumulation of information about",
    },
  ];
  return (
    <>
      <Box bg="#FFF" px={{ base: 20, md: 40 }} py={{ base: 80, md: 160 }}>
        <Container size="xl">
          <Group style={{ display: "flex", gap: "60px" }}>
            <Stack gap={"35px"} align="start">
              <Box bg="#E74040" w="94px" h="7px"></Box>

              <Title order={2} c="#252B42" size={40} fw={700}>
                Approdable Packages
              </Title>

              <Text c="#737373" maw={600}>
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: <br /> Newtonian mechanics
              </Text>
              <Button
                component={Link}
                to="/packages"
                variant="transparent"
                fw={700}
                c="#96BB7C"
                p="0"
                className="learn-btn"
                rightSection={
                  <span className="learn-btn__arrow">
                    <ChevronRight size={18} color="#96BB7C" />
                  </span>
                }
              >
                Learn More
              </Button>
            </Stack>
            <Group gap={"15px"}>
              {Packges.map((pkg: Package, index: number) => (
                <Box
                  key={index}
                  bg="#fff"
                  px="40px"
                  py="35px"
                  w={{ base: "100%", md: 280 }}
                  style={{
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    bg="#96BB7C"
                    w="70px"
                    px="19px"
                    py="22px"
                    style={{ borderRadius: "10px" }}
                  >
                    <img src={pkg.image} alt={pkg.title} />
                  </Box>
                  <Title order={3} c="#252B42" fw={700} size="lg">
                    {pkg.title}
                  </Title>
                  <Box bg="#E74040" w="50px" h="2px"></Box>
                  <Text fw={400} size="sm" c="#737373">
                    {pkg.description}
                  </Text>
                </Box>
              ))}
            </Group>
          </Group>
        </Container>
      </Box>
    </>
  );
};

export default Packages;
