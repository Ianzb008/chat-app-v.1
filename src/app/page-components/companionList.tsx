"use client"
 
import * as React from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import Link from "next/link";
import { Calendar } from "@/components/ui/calendar"


export function CompanionList() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
    <div>
        <Link href="#">
       <div className="mt-5 border-black p-1 hover:bg-gray-300 transition">
      <div className="flex items-center space-x-3 rounded-lg ml-3">
        <Avatar>
          <AvatarFallback>
            <UserRound size={24} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Jane Doe</h1>
          <h2 className="font-thin text-xs text-gray-400">What's on your mind?</h2>
        </div>
      </div>
        </div>  
        </Link>
        <Link href="#">
        <div className="mt-5 border-black p-1 hover:bg-gray-300 transition">
      <div className="flex items-center space-x-3 rounded-lg ml-3">
        <Avatar>
          <AvatarFallback>
            <UserRound size={24} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Alex Smith</h1>
          <h2 className="font-thin text-xs text-gray-400">Ask me anything...</h2>
        </div>
      </div>
        </div>   
        </Link>
        <Link href="#">
        <div className="mt-5 border-black p-1 hover:bg-gray-300 transition">
      <div className="flex items-center space-x-3 rounded-lg ml-3">
        <Avatar>
          <AvatarFallback>
            <UserRound size={24} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Chris Johnson</h1>
          <h2 className="font-thin text-xs text-gray-400">How can we help?</h2>
        </div>
      </div>
        </div> 
        </Link>
        <Link href="#">
        <div className="mt-5 border-black p-1 hover:bg-gray-300 transition">
      <div className="flex items-center space-x-3 rounded-lg ml-3">
        <Avatar>
          <AvatarFallback>
            <UserRound size={24} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-semibold">Sam Brown</h1>
          <h2 className="font-thin text-xs text-gray-400">Send a quick hello!</h2>
        </div>
      </div>
        </div> 
        </Link>
    <div className="mr-4">
        <Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md mt-6  flex justify-center mx-auto"
/>
</div>
    </div>
    );
}
