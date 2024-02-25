import { useState } from 'react';
import { View, Text, TextInput, Pressable, Linking } from 'react-native';
import styles from '../../styles/login/login.styles.js';
import { router, Link } from 'expo-router';


const Login = () => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.subTitle}>Emai address</Text>          
          <TextInput 
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          style={styles.inputControls}    
          placeholder="john@example.com"    
          />
          <Text style={styles.subTitle}>Password</Text>  
          <TextInput 
          secureTextEntry
          style={styles.inputControls} 
          placeholder='********'      
          />
        </View>

        <View style={styles.buttonContainer}>
          <Link href="app" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonLabel}>LOGIN</Text>
            </Pressable> 
          </Link>   
        </View>
        <View style={{marginTop:"auto"}}>
          <Link href='/signUp' asChild>
            <Pressable>
              <Text style={styles.footer}>Don't have an account?<Text style={{textDecorationLine:"underline"}}>Sign Up</Text></Text>
            </Pressable>
          </Link>
          <Pressable>
            <Text  style={styles.footer}>Forgot Password</Text>
          </Pressable>
        </View>
    </View>
  )
}

export default Login


