import { Stack } from 'expo-router'
import React from 'react'

function _layout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='login' />
        <Stack.Screen name='term-agree' />
        <Stack.Screen name='verify-otp' />
    </Stack>
  )
}

export default _layout