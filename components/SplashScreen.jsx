import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = () => {
    // useEffect(() => {
    //     SplashScreen.hide;
    // }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>P F M</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text:{
        fontSize: 42,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle:'italic',
    },
})