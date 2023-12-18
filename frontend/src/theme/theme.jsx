import { extendTheme } from "@chakra-ui/react";


/*
        --primary-100:#3F51B5;
    --primary-200:#757de8;
    --primary-300:#dedeff;
    --accent-100:#FF4081;
    --accent-200:#ffe4ff;
    --text-100:#212121;
    --text-200:#484848;
    --bg-100:#F5F5F5;
    --bg-200:#ebebeb;
    --bg-300:#c2c2c2;
      
      
*/
const theme = extendTheme({
  fonts: {
    heading: `'Inter-SemiBold', sans-serif`,
    body: `'Inter-Regular', sans-serif`,
  },

  colors: {
    primary: {
      100: "#3F51B5",
      200: "#757de8",
      300: "#dedeff",
    },
    accent: {
      100: "#FF4081",
      200: "#ffe4ff",
    },
    text: {
      100: "#212121",
      200: "#484848",
      300: "#344767",
    },
    bg: {
      100: "#f8f9fa",
      200: "#ebebeb",
      300: "#c2c2c2",
      400: "#2f2e41",
    },
  },
});

export default theme;
