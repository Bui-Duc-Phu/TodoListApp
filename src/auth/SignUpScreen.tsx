import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import InputComponent from '../components/InputComponent'
import { Google, Icon, Lock, Sms } from 'iconsax-react-native'
import ButtonComponent from '../components/ButtonComponent'
import { Button } from '@bsdaoquang/rncomponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth'

const SignUpcreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handelCreateAccountWithEmail = async () =>{
    if(!email ||  !password || !confirmPassword){
      setErrorText('Email and password or confirmPassword are not protected!')
    }else{
      setErrorText("")
      setIsLoading(true)
      if(!(password === confirmPassword)){
        setErrorText('Confirm Passwrod is not corret !')
      }else{
        await auth().createUserWithEmailAndPassword(email,password)
        .then(userCredential => {
          const user = userCredential.user
          // save user to fileStorge
  
          setIsLoading(false)
        } )
        .catch((error:any)=>{
          setIsLoading(false)
          setErrorText(error.message)
        })

      }
    }
  }
  
  
  
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContent}
      extraScrollHeight={Platform.OS === 'android' ? 20 : 10} 
      >
        <Container  styles={{backgroundColor:'rgba(72 ,118 ,255,0.4)'}}>
      <SectionComponent styles={{ flex: 1, justifyContent: 'flex-start',marginTop:"20%" }}>
        <TextComponent bold uppercase text='SignUp' color='black' size={30} flex={0} styles={{ textAlign: 'center' }} />

        <View style={{ marginVertical: 20 }}>
          <InputComponent
          prefix={<Sms size={24} color='gray'/>}
           onChange={val => setEmail(val)}  
           value={email} 
           placeholder='Email' 
           title='Email'
           Height={90}
           allowClear
            />
        </View>
        <View style={{ marginVertical: 20 }}>
          <InputComponent
          prefix={<Lock size={24} color='gray'/>}
           onChange={val => setPassword(val)}  
           value={password}
           placeholder='Passwrod' 
           Height={90}
           isPassword
           title='Passwrod' />
        </View>

        <View style={{ marginVertical: 20 }}>
          <InputComponent
          prefix={<Lock size={24} color='gray'/>}
           onChange={val => setConfirmPassword(val)}  
           value={confirmPassword}
           placeholder='Confirm Password' 
           Height={90}
           isPassword
           title='Confirm Password' />
            <TextComponent text={errorText} styles={{marginVertical:10,marginStart:10}} size={14} color='crimson'/>
        </View>
        <View style={{marginVertical:20,flex:1}}>
          <ButtonComponent onPress={handelCreateAccountWithEmail} flex={0}text='SignUp' textColor='black' marginHorizontal={60} backGroupColor='rgba(33,150,243,0.5)' />
          <Text style={{marginVertical:20,flex:0,color:'black',textAlign:'center'}}
          >You have an already account?<Text 
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{color:'black',fontWeight:'bold'}}
          > Login</Text></Text>
        </View>
      


      </SectionComponent>
    </Container>

      </KeyboardAwareScrollView>
    
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default SignUpcreen