import { Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { globalStyle } from '../styles/globalStyle';
import { fontFammilies } from '../constants/fontFamily';

interface Props {
    text?: string;
    size?: number;
    font?: string;
    color?: string;
    bold?: boolean;
    flex?: number;
    styles?: StyleProp<TextStyle>; 
    uppercase?:boolean
}

const TextComponent = (props: Props) => {
    const { text, font, size, color, bold, flex, styles,uppercase } = props;

    return (
        <Text style={[globalStyle.text, {
            flex: flex ?? 1,
            fontFamily: font ?? fontFammilies.regular,
            fontSize: size ?? 16,
            color: color ?? 'black',
            ...(bold && { fontWeight: 'bold' }),
            textTransform : uppercase ? 'uppercase' : undefined
        }, styles]}>{text}</Text>
    );
}

export default TextComponent;
