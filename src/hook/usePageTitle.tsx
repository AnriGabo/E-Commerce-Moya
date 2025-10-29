import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "MOYA - The Art of Dressing",
      "/accsesyourAccount": "MOYA - Access Your Account",
      "/signin": "MOYA - Welcome Back ",
      "/registration": "MOYA - Create Your Profile",
      "/limited-edition": "MOYA - The Art of Rarity",
      "/new-in": "MOYA - New Season Pieces",
      "/stories": "MOYA - Stories",
    };

    document.title = titles[location.pathname];
  }, [location.pathname]);
}
