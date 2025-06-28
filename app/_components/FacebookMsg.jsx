"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="2158819467916761" chatSupport>
    <CustomChat pageId="685182368015634" minimized={true}/>
  </FacebookProvider>   
  )
}

export default FacebookMsg
