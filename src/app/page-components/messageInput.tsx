"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useId } from "react";

export default function Component() {
  const id = useId();
  const maxLength = 50;

  const [value, setValue] = useState(""); // Handle input state manually
  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
    }
  };

  const handleSendMessage = () => {
    if (value.trim() !== "") {
      setMessages((prev) => [...prev, value]);
      setValue(""); // Clear input field after sending
    }
  };

  return (
    <div className="relative min-h-screen border border-gray-400 p-4 flex flex-col">
      {/* Message Display */}
      <div className="flex-grow p-8 space-y-3 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs shadow-md">
              {msg}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="sticky bottom-0 left-0 w-full bg-white p-4 border-t flex items-center gap-2">
        <div className="relative flex-grow">
          <Input
            id={id}
            className="peer w-full px-3 py-2 border rounded-lg"
            type="text"
            value={value}
            maxLength={maxLength}
            onChange={handleChange}
            aria-describedby={`${id}-description`}
          />
          <div
            id={`${id}-description`}
            className="absolute right-3 top-2 text-xs text-gray-50"
          >
            {value.length}/{maxLength}
          </div>
        </div>
        <Button className="rounded-lg bg-blue-500 text-white px-4 py-2 hover:text-gray-50" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
}
