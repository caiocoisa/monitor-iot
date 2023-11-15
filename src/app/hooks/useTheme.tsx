import { useContext } from "react"
import { ThemeContext } from "../contexts/useTheme";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;