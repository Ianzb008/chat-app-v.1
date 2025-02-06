import React from 'react'
import CompanionSection from '@/app/page-components/companionsSection'
import MessageSection from '../page-components/messageSection'
import SuggestionSection from '../page-components/suggestionSection'
const chatApp = () => {
  return (
    <div className='flex flex-column'>
      <div className='w-1/4 h-screen'>
        <CompanionSection/>
      </div>
      <div className='w-6/12 h-screen'>
        <MessageSection/>
      </div>
      <div className='w-1/4 h-screen'>
        <SuggestionSection/>
      </div>
    </div>
  )
}

export default chatApp
