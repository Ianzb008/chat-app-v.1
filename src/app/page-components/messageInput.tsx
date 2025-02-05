"use client";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useId } from "react";

export default function Component() {
  const id = useId();
  const maxLength = 50;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({ maxLength });

  return (
    <div className="relative min-h-screen border border-gray-400 p-4 overflow-hidden">
      <div className="flex-grow p-8"></div>
      <div className="absolute bottom-0 left-0 w-full text-center p-4">
        <div className="space-y-2">
          <Label htmlFor={id}></Label>
          <div className="flex items-center gap-2 w-full"> 
            <div className="relative flex-grow w-full">
              <Input
                id={id}
                className="peer pe-14 w-full overflow-hidden truncate"
                type="text"
                value={value}
                maxLength={maxLength}
                onChange={handleChange}
                aria-describedby={`${id}-description`}
              />
              <div
                id={`${id}-description`}
                className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50"
                aria-live="polite"
                role="status"
              >
                {characterCount}/{limit}
              </div>
            </div>
            <Button className="rounded-full whitespace-nowrap">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
