import {
  Box,
  Container,
  Group,
  Stack,
  Text,
  Title,
  Image,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-cover.webp";
import { useMediaQuery } from "@mantine/hooks";
const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        bg="#fdf3f1"
        style={{ position: "relative" }}
        px={{ base: 20, md: 40 }}
        py={{ base: 50, md: 160 }}
        pb={{ base: 0, md: 180 }}
      >
        <Container size="xl">
          <Group style={{ display: "flex", gap: "60px" }}>
            <Stack gap={"35px"} style={{ zIndex: "50" }} align="start">
              <Text c="#96BA7B" fw={700}>
                Welcome
              </Text>

              <Title order={1} c="#252B42" size={isMobile ? 42 : 58} fw={700}>
                Best Learning <br /> Opportunities
              </Title>

              <Text c="#737373" size="lg" maw={600}>
                Our goal is to make online <br /> education work for everyone
              </Text>
              <Group gap="lg">
                <Button
                  component={Link}
                  to="/join"
                  fw={700}
                  size="sm"
                  styles={{
                    root: {
                      width: 137,
                      height: 52,
                      padding: "15px 25px",
                      borderRadius: 5,
                      backgroundColor: "#96BA7B",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "15px",
                    },
                  }}
                >
                  Join Us
                </Button>

                <Button
                  component={Link}
                  to="/packages"
                  fw={700}
                  size="sm"
                  styles={{
                    root: {
                      width: 137,
                      height: 52,
                      padding: "15px 25px",
                      background: "#fdf3f1",
                      borderRadius: 5,
                      color: "#96BA7B",
                      border: "1px solid #96BA7B",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "15px",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Group>
            </Stack>
            <Image
              src={HeroImage}
              alt="Hero Image"
              loading="lazy"
              style={{
                position: isMobile ? "relative" : "absolute",
                right: "0",
                width: "100%",
                maxWidth: "max-content",
                bottom: "0",
              }}
            />
          </Group>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
