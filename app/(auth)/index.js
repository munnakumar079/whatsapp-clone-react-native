import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Imagepath from '../../constants/Imagepath'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { router } from 'expo-router'


function Index() {
  const [isloding, issetloding] = useState(false)

  useEffect(() => {

    const timer1 = setTimeout(() => {
      issetloding(true)
    }, 2000)

    const timer2 = setTimeout(() => {
      router.push('../(auth)/termagree')
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View style={styles.Body}>
        <Image style={styles.img} source={Imagepath.whatsapp} />
        <Text style={styles.wtext}>whatsapp</Text>
      </View>
      <View style={styles.Footer}>
        {isloding ? (
          <>
            <ActivityIndicator size={moderateScale(25)} color={'#0CCC83'} />
            <Text style={styles.loding}>Loading....</Text>
          </>
        ) : (
          <>
            <Text style={styles.Ftext}>From</Text>
            <Text style={styles.Ftext2}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  Body: {
    alignItems: 'center',
  },
  Footer: {
    alignItems: 'center',
  },
  Ftext: {
    fontSize: 12,
    color: '#867373',
  },
  Ftext2: {
    fontSize: 16,
  },
  img: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  wtext: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: verticalScale(10),
  },
  loding: {
    marginTop: moderateScale(10),
    color: '#0CCC83',
    fontSize: 16,
    fontWeight: '600',
  },
})
