import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { ForwardedRef, ReactNode, useState } from 'react'
import TextComponent from './TextComponent'
import RowComponent from './RowComponent'
import { globalStyle } from '../styles/globalStyle'
import AntDesign from "react-native-vector-icons/AntDesign"
import { Eye, EyeSlash } from 'iconsax-react-native'

interface Props {
  value: string
  onChange: (val: string) => void
  placeholder?: string
  title?: string
  prefix?: ReactNode
  affix?: ReactNode
  allowClear?: boolean
  multiLines?: boolean
  numberOfLines?: number
  flex_start?: boolean
  isPassword?: boolean
  Height?:number

}

const InputComponent = (props: Props) => {
  const { value, isPassword, onChange,placeholder, title, prefix, affix, allowClear, multiLines, numberOfLines, flex_start,Height } = props
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View style={{ padding: 0 ,height:Height ?? undefined}}>
      {title && <TextComponent text={title} size={20} bold styles={{ marginStart: 10 }}  flex={1}/>}
      <RowComponent styles={[globalStyle.inputContainer, {
        marginTop: title ? 8 : 0,
        paddingVertical: 10,
        paddingHorizontal: 8,
        minHeight: numberOfLines && multiLines ? 40 * numberOfLines : 32,
        flex:1

      }]}>
        {prefix && prefix}
        <View style={{ flex: 1, paddingLeft: prefix ? 8 : 0, paddingRight: affix ? 5 : 0, }}>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder ?? ''}
            placeholderTextColor={'gray'}
            multiline={multiLines ? multiLines :undefined }
            numberOfLines={numberOfLines ? numberOfLines : undefined}
            style={{ color: 'black', margin: 0,padding: 3, flex: 1, textAlignVertical: flex_start ? 'top' : 'center' }}
            secureTextEntry={isPassword ? !isShowPassword : false}
            autoCapitalize='none'
            autoCorrect={false}
      
          />
        </View>
        {affix && affix}
        {allowClear && value &&
          <TouchableOpacity onPress={() => onChange('')}  >
            <AntDesign name='close' color={'black'} size={24} />
          </TouchableOpacity>}

        {isPassword && <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
          {isShowPassword ? (
            <EyeSlash size={20} color='black' />
          ) : (
            <Eye size={20} color='black' />
          )}
        </TouchableOpacity>}
      </RowComponent>
    </View>
  )
}

export default InputComponent
