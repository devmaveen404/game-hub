// 2, implementing Dark Mode
import { extendTheme, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
    initialColorMode: "dark"
}

const theme = extendTheme({ config })

export default theme // import in main.tsx 
