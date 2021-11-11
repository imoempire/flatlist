import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import New from './New';
// import Lists from './Lists';
export default function App() {
  return (
    <View style={styles.container}>
      <New/>
      {/* <Lists/> */}
      <StatusBar style="auto" />
      {/* <View style={styles.title}>
        <Text style={{fontSize: 50, right: 50, color: '#5F2585', fontWeight: 'bold'}}>Log in</Text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputs} placeholder="Username" />
        <TextInput style={styles.inputs} placeholder="Password" />
        <Text style={{color: 'blue', top: 8, left: 60,}}>Forgot Password?</Text>
      </View>
      <View style={styles.log}>
      <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>UPDATE PROFILE</Text>
        </TouchableOpacity>
        <Text style={{top: 20,}}>Don't have account?  <Text style={{color: "#5F2585"}}>Sgin up</Text></Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    flex: 0.5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  input: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  inputs: {
    fontSize: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#5F2585',
    width: 250,
    height: 50,
  },
  log: {
    flex: 0.6,
    alignItems: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  button: {
    flex: 0.2,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5F2585",
    borderRadius: 10,
  },
});
