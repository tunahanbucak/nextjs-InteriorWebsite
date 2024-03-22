import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button>
        <Sun />
        <Moon />
      </Button>
    </div>
  );
}
