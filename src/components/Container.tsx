import { View, Text, ScrollView, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyle } from '../styles/globalStyle'
import RowComponent from './RowComponent'
import { ArrowLeft2, Pointer } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import TextComponent from './TextComponent'


interface Props {
  title?: string
  back?: boolean

  right?: ReactNode
  children?: ReactNode
  isScroll?: boolean
  styles?:StyleProp<ViewStyle>

}

const Container = (props: Props) => {
  const { title, back, right, children, isScroll,styles } = props
  const navigation: any = useNavigation()
 


  return (
    
    <View style={[globalStyle.Container]}>
      <RowComponent styles={{

        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16
      }}>
        {
          back && <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 0 }}>
            <ArrowLeft2 size={24} color='black' />
          </TouchableOpacity>
        }
        <View style={{ flex: 1, justifyContent: 'center', }}>
          <TextComponent bold text={title ?? ''} styles={{ position: 'absolute', right: '40%' }} />
        </View>

      </RowComponent>
      {
        isScroll ? (
          <ScrollView style={[{flex:1},styles]}>{children}</ScrollView>)
          : (
            <View style={[{flex:1},styles]}>{children}</View>)
      }

    </View>
  )
}

export default Container