"use client"
import React from 'react'
import { TableDemo } from './suggestionList'
import { Calendar } from "@/components/ui/calendar"

const suggestionSection = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    
  return (
    <div>
      <TableDemo/>
      <div className="ml-4">
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md mt-4 flex justify-center mx-auto"
      />
      </div>
    </div>
  )
}

export default suggestionSection
