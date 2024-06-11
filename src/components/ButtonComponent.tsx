import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import TextComponent from './TextComponent';

interface Props {

    width?:  number;
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>;
    backGroupColor?: string;
    textColor?: string;
    textSize?: number;
    isbold?: boolean
    text?: string
    flex?:number
    radius?:number
    marginHorizontal?: number
    borderWidth?:number
    borderColor?:string
    pading?:number,
    height?:number
    
}

const ButtonComponent = (props: Props) => {
    const { flex,width, justify, onPress, styles, 
        backGroupColor, textColor, textSize, isbold, text ,radius,marginHorizontal
        ,borderColor,borderWidth,pading,height
    } = props;

    const styleLocal = StyleSheet.create({
        button: {

            justifyContent: justify ?? 'center',
            backgroundColor: backGroupColor ?? 'transparent',
            alignItems: 'center',
            padding: pading ?? 10,
            flex: flex ?? 1,
            borderRadius: radius ?? 100,
            marginHorizontal: marginHorizontal ?? undefined,
            width: width ?? undefined,
            height: height ?? 50,
            borderWidth: borderWidth ?? 1,
            borderColor:borderColor ?? 'black' 
        },

    });

    return (
        <TouchableOpacity style={[styleLocal.button, styles]} onPress={onPress}>
            <TextComponent
                text={text ?? ''}
                bold={isbold ?? false}
                size={textSize ?? 18}
                color={textColor ?? 'black'}
                flex={0}
            />
        </TouchableOpacity>
    );
}

export default ButtonComponent;
