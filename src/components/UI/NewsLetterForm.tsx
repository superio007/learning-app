import { Box, Group, TextInput, Button, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import type { FormValues } from "../../types/NewsLetter";
const NewsLetterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    setIsSuccess(true);
    console.log("Form Data:", data);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(false);
    }, 3000);
    reset();
    setIsLoading(false);
  };
  return (
    <Box mt="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Group gap={0} w={isMobile ? "100%" : 700}>
          <TextInput
            placeholder="Your Email"
            radius="sm"
            size="md"
            style={{ flex: 1 }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            styles={{
              input: {
                backgroundColor: "#F9F9F9",
                padding: "12px 16px",
                height: "52px",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          />

          <Button
            type="submit"
            radius="sm"
            size="md"
            style={{
              backgroundColor: "#96BA7B",
              padding: "12px 18px",
              height: "52px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </Group>
        {isSuccess && (
          <Text c="green" size="sm" pt="xs">
            Thank you for subscribing!
          </Text>
        )}
        {errors.email && (
          <Text c="red" size="sm" pt="xs">
            {errors.email.message}
          </Text>
        )}
      </form>
    </Box>
  );
};

export default NewsLetterForm;
