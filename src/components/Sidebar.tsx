import { clearToken } from "@/lib/auth";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const router = useNavigate();
  return (
    <div className="w-60 bg-gray-100 hidden flex-col justify-between h-screen sm:flex">
      <div className="p-4">
        <a href="/home" className="block py-2 text-lg font-semibold">
          Home
        </a>
      </div>
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
    </div>
  );
};

export default Sidebar;
