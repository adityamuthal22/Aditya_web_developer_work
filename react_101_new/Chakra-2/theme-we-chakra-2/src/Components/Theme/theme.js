import { extendTheme } from "@chakra-ui/react";
import { textStyles } from "./textStyles";
import Button from "./Button";
const theme = extendTheme({
  textStyles,
  components: {
    Button
  }
});
export default theme;