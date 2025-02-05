import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

export function UserIcon() {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex items-center space-x-3  p-4 rounded-lg">
        <Avatar>
          <AvatarFallback>
            <UserRound size={24} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold">John Doe</h1>
          <h2 className="font-thin">Info Account</h2>
        </div>
      </div>
    </div>
  );
}
