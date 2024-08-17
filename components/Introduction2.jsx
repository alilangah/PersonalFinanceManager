import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Introduction2 = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.skipButton} onPress={() =>navigation.navigate('SignIn')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
        <View style={styles.card}>
      <Text style={styles.heading}>Get totall control on your money</Text>
      <Text style={styles.text}>Track your transaction easily, with categories and financial report.</Text>
      <View style={styles.pagination}>
          <View style={styles.dot}/>
          <View style={[styles.dot, styles.activeDot]}/>
          <View style={styles.dot} />
        </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Introduction3')}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Introduction2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-end',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    skipButton: {
        alignSelf: 'flex-end',
        marginBottom: 350,
        marginRight: 22,
        width: 80,
        height: 50,
        backgroundColor:'darkblue',
        alignItems:'center',
        borderRadius: 30,
      },
      skipText: {
        color: '#fff',
        fontSize: 18,
        padding: 10
      },
    card:{
        width: 300,
        height: 350,
        backgroundColor: '#fff',
        padding: 11,
        borderRadius: 20,
        marginBottom:20,
        alignItems: 'center',
    },
    heading:{
        color:'#4B3FEC',
        fontSize: 20,
        fontWeight:'600',
        textAlign:'center',
        marginTop: 20,
    },
    text:{
        color: '#7a7a7a',
        textAlign:'center',
        fontSize:16,
        marginTop:20,
    },
    pagination: {
        flexDirection: 'row',
        marginTop:40,
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#cccccc',
        marginHorizontal: 4,
      },
      activeDot: {
        backgroundColor: '#4B3FEC',
      },
    button:{
        width:160,
        padding:15,
        backgroundColor:'blue',
        alignItems:'center',
        borderRadius: 30,
        marginTop:60,
    },
    btnText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize: 18,
    }
})