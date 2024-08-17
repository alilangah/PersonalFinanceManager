import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.welcomTxt}>Welcome to PFM</Text>
      <Text style={styles.getStartedTxt}>Complete the sign up to get started</Text>
      <TextInput placeholder='Name' keyboardType='text' style={styles.textInput}></TextInput>
      <TextInput placeholder='Email' keyboardType='email-address' style={styles.textInput}></TextInput>
      <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput}></TextInput>
      <Text style={styles.privacyTxt}>By Signing up, you agree to the Terms of Service and Privacy Policy</Text>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnR}>
        <Text style={styles.txtR}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnL}>
        <Text style={styles.txtL}>LogIn</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#F5F7FF',
    margin:20,
  },
  heading:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
  },
  welcomTxt:{
    color:'#000',
    fontSize:20,
    fontWeight:'bold',
    marginTop:30,
  },
  getStartedTxt:{
    color:'#000',
    marginVertical:20,
  },
  textInput:{
    backgroundColor:'#fff',
    margin: 10,
    borderRadius: 20,
  },
  privacyTxt:{
    color:'#000',
    marginVertical:20,
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:200,
  },
  btnR:{
    backgroundColor:'#E7E7FC',
    borderRadius:15,
  },
  txtR:{
    width:80,
    color:'blue',
    fontWeight:'bold',
    margin:12,
    textAlign:'center',
  },
  btnL:{
    backgroundColor:'blue',
    borderRadius:15,
  },
  txtL:{
    width:120,
    color:'#fff',
    fontWeight:'bold',
    margin:12,
    textAlign:'center',
  },
})