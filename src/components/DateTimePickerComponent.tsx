import { View, Text, Modal, Button, Dimensions } from 'react-native'
import React, { useState } from 'react'
import TextComponent from './TextComponent'
import RowComponent from './RowComponent'
import { ArrowDown2 } from 'iconsax-react-native'
import { globalStyle } from '../styles/globalStyle'
import { TouchableOpacity } from 'react-native'
import SpaceComponent from './SpaceComponent'
import DatePicker from 'react-native-date-picker'

interface Props {
  type: 'date' | 'time' | 'datetime'
  title?: string
  placeholder?: string
  selected: Date
  onSelect?: (val: Date) => void
}


const DateTimePickerComponent = (props: Props) => {
  const { type, title, placeholder, selected, onSelect } = props

  const [isVisibleModalDateTime, setIsVisibleModalDateTime] = useState(false);
  const [dateValue, setdateValue] = useState(selected ?? new Date());

  return (
    <View style={{ marginBottom: 5, flex: 1 }}>
      {title && <TextComponent text={title} bold size={20} styles={{marginStart:10}} />}
      <RowComponent
        onPress={() => setIsVisibleModalDateTime(true)}
        styles={[globalStyle.inputContainer, { marginTop: title ? 10 : 0 }, { paddingBottom: 15, paddingEnd: 20, paddingStart: 20, paddingTop: 15 }]}>
        <TextComponent
          text={selected 
            ?  type  === 'time' 
            ? `${selected.getHours()}:${selected.getMinutes()}` 
            : `${selected.getDate()<10? 0: ''}${selected.getDate()}/${selected.getDate()<10 ?0: ''}${selected.getMonth() + 1}/${selected.getFullYear()}` : placeholder ? placeholder : ''}
          flex={1}
          color={selected ? 'black' : 'gray'}
        />
        <ArrowDown2 size={20} color='black' />

      </RowComponent>
      

      <Modal visible={isVisibleModalDateTime} transparent animationType='slide'  >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{
            margin: 20,
            width: '90%',
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 20
          }}>

            <View >
              <DatePicker
               
                mode={type}
                buttonColor='black'
                dividerColor='black'
                theme='light'
                date={dateValue}
                locale='vi'
                onDateChange={val => setdateValue(val)} />
            </View>
           
            <SpaceComponent height={20} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => {
               if (onSelect) {
                onSelect(dateValue);
              }
              setIsVisibleModalDateTime(false)
              
            }} >
              <TextComponent text='Confirm' flex={0} color='blue'  bold />
            </TouchableOpacity>
            <SpaceComponent height={20} />
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setIsVisibleModalDateTime(false)} >
              <TextComponent text='Close' flex={0} color='blue' bold/>
            </TouchableOpacity>


        
          </View>


        </View>

      </Modal>

    </View>
  )
}

export default DateTimePickerComponent