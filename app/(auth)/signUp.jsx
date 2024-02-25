import { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';
import styles from '../../styles/signup/signUp.styles';
import { Link, router } from 'expo-router';

//console.log(router)

const SignUp = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>

        <View style={styles.inputContainer}>
        <Text style={styles.subTitle}>Enter your name</Text>
          <TextInput 
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.inputControls}    
          placeholder="john doe"    
          />
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
              <Text style={styles.buttonLabel}>SIGN UP</Text>
            </Pressable> 
          </Link>   
        </View>
        <View style={{marginTop:"auto"}}>
          <Link href='/' asChild>
            <Pressable >
              <Text style={styles.footer}>Already have an account?<Text style={{textDecorationLine:"underline"}} >Login</Text></Text>
            </Pressable>
          </Link>
          <Pressable>
            <Text  style={styles.footer}>Forgot Password</Text>
          </Pressable>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default SignUp


