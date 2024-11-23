import { type ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@/components/ui/pop-over";
import { AiFillGithub } from "react-icons/ai";

const NotImplemented: React.FC<{ children: ReactNode; feature?: string }> = ({
  children,
  feature,
}) => {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className=" hover:cursor-not-allowed"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className="z-50" side="left" align="end" sideOffset={5}>
          <div className="rounded-md border-2 bg-white px-6 py-4">
            <h1 className="text-sm font-semibold">This feature is still in development</h1>

          </div>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export { NotImplemented };
