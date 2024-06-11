import { View, Text, StyleSheet, Platform, Modal } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import InputComponent from '../components/InputComponent'
import { Google, Icon, Lock, Sms } from 'iconsax-react-native'
import ButtonComponent from '../components/ButtonComponent'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import * as Progress from 'react-native-progress';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');


  const handleLoginWithEmail = async () => {
    if (!email || !password) {
      setErrorText('Email and password are not protected!')
    } else {
      setErrorText("")
      setIsLoading(true)
      await auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          setIsLoading(false)
          const user = userCredential.user
          console.log(user)
        })
        .catch((err: any) => {
          setIsLoading(false)
          setErrorText(err.message)
        })

    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollViewContent}
      extraScrollHeight={Platform.OS === 'android' ? 20 : 10}
    >
      <Container styles={{ backgroundColor: 'rgba(72 ,118 ,255,0.4)' }}>
        <SectionComponent styles={{ flex: 1, justifyContent: 'flex-start', marginTop: "40%" }}>
          <TextComponent bold uppercase text='Login' color='black' size={30} flex={0} styles={{ textAlign: 'center' }} />

          <View style={{ marginVertical: 20 }}>
            <InputComponent
              prefix={<Sms size={24} color='gray' />}
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
              prefix={<Lock size={24} color='gray' />}
              onChange={val => setPassword(val)}
              value={password}
              placeholder='Passwrod'
              Height={90}
              isPassword
              title='Passwrod' />
            <TextComponent text={errorText} styles={{ marginVertical: 10, marginStart: 10 }} size={14} color='crimson' />
          </View>
          <View style={{ marginVertical: 20, flex: 1 }}>
            <ButtonComponent onPress={handleLoginWithEmail} flex={0} text='Login' textColor='black' marginHorizontal={60} backGroupColor='rgba(33,150,243,0.5)' />
            <Text style={{ marginVertical: 20, flex: 0, color: 'black', textAlign: 'center' }}
            >You don't have an account?<Text
              onPress={() => navigation.navigate('SignUpScreen')}
              style={{ color: 'black', fontWeight: 'bold' }}
            > Create account</Text></Text>
          </View>

          <Modal visible={isLoading} transparent animationType='slide'   >
            <View style={styles.viewModal} >
              <Progress.Circle
                size={70}
                indeterminate={true}
                color='white'
                borderWidth={3}
                textStyle={{ color: 'black' }}
                endAngle={0.6}
                allowFontScaling
              />

            </View>

          </Modal>







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
  viewModal: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)'
  }
});

export default LoginScreen