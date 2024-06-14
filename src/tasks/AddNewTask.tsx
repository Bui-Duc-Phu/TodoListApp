import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TaskModel } from '../models/taskModel'
import Container from '../components/Container'
import SectionComponent from '../components/SectionComponent'
import InputComponent from '../components/InputComponent'
import { User } from 'iconsax-react-native'
import DateTimePickerComponent from '../components/DateTimePickerComponent'
import ButtonComponent from '../components/ButtonComponent'
import RowComponent from '../components/RowComponent'
import SpaceComponent from '../components/SpaceComponent'
import DropdownPicker from '../components/DropdownPicker'
import firestore from '@react-native-firebase/firestore'
import { SelectModel } from '../models/SelectModel'



const initValue: TaskModel = {
  title: '',
  desctiption: '',
  dueDate: new Date(),
  start: new Date(),
  end: new Date(),
  uids: [],
  fileUrls: []
}

const AddNewTask = ({ navigation }: any) => {



  const [taskDetail, settaskDetail] = useState<TaskModel>(initValue);
  const [usersSelect, setUsersSelect] = useState<SelectModel[]>([]);

  const handelChangeValue = (id: string, value: string |string[] |  Date) => {
    settaskDetail(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const hendelAddNewTask = async () => {
    console.log(taskDetail)
  }

  const handleGetAllUsers = async () => {
    try {
      const snapshot = await firestore().collection('users').get();
      const items: SelectModel[] = snapshot.docs.map(doc => {
        return {
          label: doc.data().name, 
          value: doc.id           
        };
      });

      setUsersSelect(items); 

      console.log(items);  
    } catch (error) {
      console.error("Error getting documents: ", error); 
    }

  }


  useEffect(() => {
    handleGetAllUsers()
  }, [])


  return (
    <Container back title="add new task" isScroll>
      <SectionComponent >
        <InputComponent
          prefix={<User color='black' size={24} />}
          value={taskDetail.title}
          onChange={val => handelChangeValue('title', val)}
          title='.Title'
          allowClear
          placeholder='Title of task'
        />
        <InputComponent

          value={taskDetail.desctiption}
          onChange={val => handelChangeValue('desctiption', val)}
          title='.Desctiption'
          allowClear
          placeholder='Content'
          multiLines
          numberOfLines={3}
          flex_start
        />
        <DateTimePickerComponent
          selected={taskDetail.dueDate}
          onSelect={val => handelChangeValue('dueDate', val)}
          placeholder='choice'
          title='Due Date'
          type="date"
        />

        <RowComponent >
          <View style={{ flex: 1 }}>
            <DateTimePickerComponent
              selected={taskDetail.start}
              onSelect={val => handelChangeValue('start', val)}
              placeholder='choice'
              title='Start'
              type="time"
            />
          </View>
          <SpaceComponent width={10} />
          <View style={{ flex: 1 }}>
            <DateTimePickerComponent
              selected={taskDetail.end}
              onSelect={val => handelChangeValue('end', val)}
              placeholder='choice'
              title='End'
              type="time"
            />
          </View>
        </RowComponent>
        <DropdownPicker
          title='Members'
          selected={taskDetail.uids}
          items={usersSelect}
          onSelect={val =>handelChangeValue('uids',val)}
          multible
        />


      </SectionComponent>

      <SectionComponent>
        <ButtonComponent text='Save' marginHorizontal={30} onPress={hendelAddNewTask} />
      </SectionComponent>
    </Container>
  )
}

export default AddNewTask