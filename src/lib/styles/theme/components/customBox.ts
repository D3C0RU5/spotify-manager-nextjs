import type { ComponentStyleConfig } from "@chakra-ui/react";

export const CustomBox: ComponentStyleConfig = {
  baseStyle: {
    bg: "full",
  },
  variants: {
    custom: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "gray.900" : "white",
    }),
  },
};
