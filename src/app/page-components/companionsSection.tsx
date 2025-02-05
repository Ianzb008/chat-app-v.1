import React from 'react'
import { NavMenu } from './navSection'
import { UserIcon } from './userIcon'
import { CompanionList } from './companionList'

const companionsSection = () => {
  return (
    <div>
      <UserIcon/>
      <NavMenu/>
      <CompanionList/>
    </div>
  )
}

export default companionsSection
