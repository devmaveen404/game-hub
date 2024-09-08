// 2, implementing Dark Mode
import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
   initialColorMode: "dark"
}

const theme = extendTheme({
   config,
   // 24, Dark Chakra theme
   colors: {
      gray: {
         50: '#f9f9f9',
         100: '#ededed',
         200: '#d3d3d3',
         300: '#b3b3b3',
         400: '#a0a0a0',
         500: '#898989',
         600: '#6c6c6c',
         700: '#202020',
         800: '#121212',
         900: '#0d0d0d',
      }
   },
   styles: {
      global: {
         body: {
            transitionProperty: "all !important",
            transitionDuration: "0.02s !important",  // 0.3 seconds for smooth transitions
            transitionTimingFunction: "ease-in-out !important", // Smooth easing
         },
      },
   },
});

export default theme // import in main.tsx 
