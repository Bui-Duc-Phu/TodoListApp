import { View, Text } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'
import { appColor } from '../constants/colors'


interface Props {
    color?: string
    value: number
    maxValue?: number
    radius?:number
    stroker?:number
    size_title?:number

}

const CircularComponent = (props: Props) => {

    const { color, value, maxValue ,radius,stroker,size_title} = props
    return (
        <CircularProgress
            value={value}
            showProgressValue={false}
            radius={radius ?? 40}
            activeStrokeColor={color ?? 'blue'}
            inActiveStrokeColor={'green'}
            title={`${value}%`} 
            titleFontSize={ size_title ?? 18}
            titleColor='blue'
            inActiveStrokeWidth={stroker ?? 7}
            activeStrokeWidth={stroker ?? 7}
            
           
        />
    )
}

export default CircularComponent