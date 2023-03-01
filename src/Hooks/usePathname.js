import { useLocation } from "react-router-dom";

// custom hook to get the current pathname in React

export const usePathname = () => {
  const location = useLocation();
  const location_path = location.pathname;
  return location_path;
};
