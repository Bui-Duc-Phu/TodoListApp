import { View, Text, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleProp } from 'react-native'
import TextComponent from './TextComponent'
import { globalStyle } from '../styles/globalStyle'
interface Props{
  text?:string
  color?:string
  textColor?:string
  tagStyles?:StyleProp<ViewStyle>
  textStyles?:StyleProp<ViewStyle> 
  onPress?:() => void


  
}

const TagComponent = (props:Props) => {

  const {text,color,tagStyles,textStyles,onPress,textColor} = props
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}  style={[globalStyle.tag,tagStyles,{backgroundColor:color?? 'blue'}]}  >
      <TextComponent text={text} styles={textStyles} color={textColor} />
    </TouchableOpacity>
  )
}

export default TagComponent