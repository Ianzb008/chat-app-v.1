import React from 'react'
import CompanionSection from '@/app/page-components/companionsSection'
import MessageSection from '../page-components/messageSection'
const chatApp = () => {
  return (
    <div className='flex flex-column'>
      <div className='w-1/4 h-screen'>
        <CompanionSection/>
      </div>
      <div className='border w-6/12 h-screen'>
        <MessageSection/>
      </div>
      <div className='border-black border w-1/4 h-screen'>
      </div>
    </div>
  )
}

export default chatApp
