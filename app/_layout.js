import { Redirect, Stack } from 'expo-router'
import React, { useState } from 'react'

function _layout() {
  const [islogin , setislogin]=useState(false)
  return (
    <>
    <Stack screenOptions={{headerShown:false}} />
    {islogin ? ( <Redirect href={'/(main)'} />) : (<Redirect href={'/(auth)'} />)}
    </>
  )
}

export default _layout