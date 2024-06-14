import { View, Text, Modal, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectModel } from '../models/SelectModel'
import TextComponent from './TextComponent'
import RowComponent from './RowComponent'
import { globalStyle } from '../styles/globalStyle'
import { ArrowDown2, Scroll, SearchNormal1, TickCircle } from 'iconsax-react-native'
import ButtonComponent from './ButtonComponent'
import InputComponent from './InputComponent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SpaceComponent from './SpaceComponent'

interface Props {
  title?: string
  items?: SelectModel[]
  selected?: string[]
  onSelect?: (val: string[]) => void
  multible?: boolean
}

const DropdownPicker = (props: Props) => {
  const { title, items = [], selected = [], onSelect, multible } = props;

  const [isvisible, setIsvisible] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [results, setResults] = useState<SelectModel[]>([]);
  const [dataSelect, setDataSelect] = useState<string[]>([]);

  const handleSelectItem = (id: string) => {

    if (multible) {
      const data = [...dataSelect]

      const index = data.findIndex(element => element === id)

      if (index !== -1) {
        data.splice(index, 1)

      } else {
        data.push(id)
      }
      setDataSelect(data)

    } else {
      setDataSelect([id])
    }
  }
  useEffect(() => {
    selected && setDataSelect(selected)

  }, [isvisible, selected])

  const handelConfirmSelecte = () => {

    if (onSelect) {
      onSelect(dataSelect)
    }
    setIsvisible(false)
    setDataSelect([])


  }
  useEffect(() => {

    if (!searchKey) {
      setResults([])
    } else {
      const data = items?.filter(element =>
        element.label.toLowerCase().includes(searchKey.toLowerCase())
      )
      setResults(data);
    }
  }, [searchKey])

  const renderSelectItems = (id: string, index: number) => {
    const item = items.find(element => element.value === id)


    return item && <RowComponent key={id} onPress={() => handleRemoveItemSelected(index)}
      styles={{
        flex: 0,
        marginRight: 4,
        padding: 2,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginBottom: 4,
        marginHorizontal: 6,
        width:'auto',
        height:'auto'
      }} >
    
      <Text style={{flex:0,margin:3,fontSize:17,color:'black'}}  >{item.label}</Text>
      <SpaceComponent width={10}/>
      <AntDesign name='close' size={14} color={'darkred'} />
    </RowComponent>

  }

  const handleRemoveItemSelected = (index:number) =>{
  
    if(selected ){
      selected.splice(index,1)
      if(onSelect) onSelect(selected)
      
    }


  }



  return (
    <View>
      {title && <TextComponent text={title} bold size={20} />}
      <RowComponent onPress={() => setIsvisible(true)} styles={[globalStyle.inputContainer, { marginTop: title ? 8 : 0, }]}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingRight: 12 }}>
          {selected && selected.length > 0 ? (
            selected.map((id, index) => renderSelectItems(id, index))
          ) : (
            <TextComponent text='Select' color='gray' flex={0} />
          )}
        </View>
        <ArrowDown2 size={20} color='gray' />
      </RowComponent>
      <Modal style={{ flex: 1 }} visible={isvisible} transparent animationType='slide' statusBarTranslucent>

        <View style={[globalStyle.Container, { padding: 20, marginVertical: 30 }]}>
          <RowComponent styles={{ alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 10 }}>
              <InputComponent
                Height={60}
                value={searchKey}
                onChange={val => setSearchKey(val)}
                placeholder='Search...'
                allowClear

                prefix={<SearchNormal1 size={20} color='gray' />}

              />
            </View>
            <TouchableOpacity style={{ flex: 0 }} onPress={() => setIsvisible(false)}>
              <TextComponent text='Cancel' flex={0} color='darkred' size={15} />
            </TouchableOpacity>
          </RowComponent>


          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
            data={searchKey ? results : items}
            renderItem={({ item }) => (
              <RowComponent key={item.value} styles={{ paddingVertical: 10 }} onPress={() => handleSelectItem(item.value)}>
                <TextComponent text={item.label} size={17} color={dataSelect.includes(item.value) ? 'green' : 'black'} />
                {dataSelect.includes(item.value) && <TickCircle size={20} color='green' />}
              </RowComponent>
            )}
          />
        </View>
        <ButtonComponent onPress={() => handelConfirmSelecte()} text='Confirm' flex={0} marginHorizontal={90} styles={{ marginVertical: 20 }} />

      </Modal>
    </View>
  )
}

export default DropdownPicker


