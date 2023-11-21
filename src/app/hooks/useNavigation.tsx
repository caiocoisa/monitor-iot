import { useContext } from "react";
import { NavigationContext } from "../contexts/navigation-context";

export const useNavigation = () => {
  return useContext(NavigationContext)
}