import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyle } from '../styles/globalStyle';
import TextComponent from '../../node_modules/react-native-android8-component/src/component/TextView'

interface Props {
  children?: ReactNode;
  justify?: | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
  onPress?: () => void
  styles?: StyleProp<ViewStyle>  
}

const RowComponent = (props: Props) => {
  const { children, justify, onPress ,styles} = props;


  const myfunGlobalStyle = [
    globalStyle.row,
    { justifyContent: justify ?? 'center' },
    ...(Array.isArray(styles) ? styles : [styles])
  
  ]


  return onPress ? <TouchableOpacity  style={myfunGlobalStyle} onPress={onPress ? () => onPress() : undefined}>{children}</TouchableOpacity> 
  :(
    <View style={myfunGlobalStyle}>{children}</View>
  );
};

export default RowComponent;
