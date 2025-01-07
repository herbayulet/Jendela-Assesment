import { clearToken } from "@/lib/auth";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isVerySmall = useMediaQuery({ maxWidth: 320 });
  const router = useNavigate();

  return (
    <div
      className={`h-16 bg-gray-800 text-white flex flex-row justify-between items-center px-4 ${
        isVerySmall ? "w-full" : ""
      }`}
    >
      <p className={`text-xl font-bold ${isVerySmall ? "text-center" : ""}`}>
        Roti Jendela360
      </p>
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full bg-zinc-600 ${
          isVerySmall ? "mx-auto" : ""
        }`}
      >
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger>B</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <div className="p-4">
                <Button
                  variant={"destructive"}
                  size={"lg"}
                  onClick={() => {
                    clearToken();
                    router("/login");
                  }}
                >
                  Log out
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <p className="font-bold">B</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
