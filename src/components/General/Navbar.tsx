import {
  Container,
  Group,
  Flex,
  Button,
  Image,
  Box,
  Anchor,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandName from "../../assets/Brandname.webp";

const Navbar = () => {
  const navItems = ["Home", "Product", "Pricing", "Contact"];
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box bg="#FDF3F1" px={{ base: 20, md: 40 }} py={{ base: 20, md: 10 }}>
      <Container size="xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link to="/">
            <Image
              loading="lazy"
              src={BrandName}
              alt="Brand logo"
              fit="contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <Group gap="lg" visibleFrom="md">
            {navItems.map((item) => (
              <Anchor
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                underline="never"
                fw={700}
                fz={14}
                c="#737373"
                styles={{
                  root: {
                    "&:hover": {
                      color: "#96BA7B",
                    },
                  },
                }}
              >
                {item}
              </Anchor>
            ))}
          </Group>

          {/* Desktop Right Buttons */}
          <Group gap="lg" visibleFrom="md">
            <Button
              component={Link}
              to="/login"
              variant="transparent"
              fw={700}
              styles={{
                root: {
                  color: "#96BA7B",
                },
              }}
            >
              Login
            </Button>

            <Button
              component={Link}
              to="/join"
              rightSection={<ArrowRight size={16} />}
              fw={700}
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
              Join Now
            </Button>
          </Group>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            color="#96BA7B"
            onClick={toggle}
            hiddenFrom="md"
            size="md"
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        bg="#FDF3F1"
        size="100%"
        title={
          <Link to="/">
            <Image
              src={BrandName}
              loading="lazy"
              alt="Brand logo"
              fit="contain"
            />
          </Link>
        }
      >
        <Stack gap="lg">
          {navItems.map((item) => (
            <Anchor
              key={item}
              component={Link}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={close}
              fw={700}
              underline="never"
              c="#737373"
            >
              {item}
            </Anchor>
          ))}

          <Button
            component={Link}
            to="/login"
            variant="transparent"
            onClick={close}
            styles={{
              root: { color: "#96BA7B" },
            }}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/join"
            onClick={close}
            rightSection={<ArrowRight size={16} />}
            styles={{
              root: {
                backgroundColor: "#96BA7B",
                borderRadius: 5,
                textTransform: "uppercase",
              },
            }}
          >
            Join Now
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Navbar;
