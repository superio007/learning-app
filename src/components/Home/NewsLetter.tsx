import { Box, Container, Stack, Text, Title } from "@mantine/core";
import NewsLetterForm from "../UI/NewsLetterForm";
import { useMediaQuery } from "@mantine/hooks";

const NewsLetter = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      bg="#FFF2F3"
      px={{ base: 20, md: 40 }}
      py={{ base: 40, md: 80 }}
      style={{
        minHeight: isMobile ? "400px" : "594px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="xl">
        <Stack gap="40px" align="center">
          <Stack align="center" gap="12px">
            <Text c="#96BB7C" fw={700}>
              Newsletter
            </Text>

            <Title order={2} c="#252B42" fw={700} ta="center">
              Watch our Courses
            </Title>

            <Text ta="center" c="#737373" maw={600}>
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </Text>
          </Stack>

          <NewsLetterForm />
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsLetter;
