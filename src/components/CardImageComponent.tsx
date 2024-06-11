import { View, Text, ImageBackground, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyle } from '../styles/globalStyle'
import { image } from '../../assets/images'

interface Props{
    children?:ReactNode
    color?:string,
    styles?:StyleProp<ViewStyle>
}

const CardImageComponent = (props:Props) => {

    const {children,color,styles} = props
  return (
    <ImageBackground source={image.back_card} 
    imageStyle={{borderRadius:20}}
    style={[styles]}
    >
        
        <View style={[{
            borderRadius:20 ,
            backgroundColor:color ?? 'rgba(113,77,217,0.8)',
            flex:1,
            padding:12
        }]}>{children}

        </View>
    </ImageBackground>
  )
}

export default CardImageComponent