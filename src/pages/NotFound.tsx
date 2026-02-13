"use client";

import { Container, Title, Text, Button, Stack, Box } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bg="#fafafa">
      <Container
        size="md"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack align="center" gap="md" ta="center">
          <Title
            order={1}
            c="#96BA7B"
            style={{
              fontSize: "120px",
              lineHeight: 1,
              fontWeight: 900,
            }}
          >
            404
          </Title>

          <Title order={3}>Page Not Found</Title>

          <Text c="dimmed" size="lg" maw={500}>
            The page you are looking for does not exist or has been moved. Check
            the URL or return to the homepage.
          </Text>

          <Button
            size="md"
            leftSection={<IconArrowLeft size={18} />}
            onClick={() => navigate("/")}
            bg="#96BA7B"
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;
