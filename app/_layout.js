import { Redirect, Stack } from 'expo-router'
import React, { useState } from 'react'

function _layout() {
    const [islogin , setlogin]=useState(false)
  return (
   
    islogin ? <Redirect href={'/(main)'}/> :<Redirect href={'/(auth)'} />

  )
}

export default _layout