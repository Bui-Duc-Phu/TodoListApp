import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Container from '../components/Container'
import RowComponent from '../components/RowComponent'
import SectionComponent from '../components/SectionComponent'
import { globalStyle } from '../styles/globalStyle'

import { Add, Edit2, Element4, Notification, SearchNormal1 } from 'iconsax-react-native'
import CardComponent from '../components/CardComponent'
import TextComponent from '../components/TextComponent'
import { appColor } from '../constants/colors'
import TagComponent from '../components/TagComponent'
import SpaceComponent from '../components/SpaceComponent'
import CircularComponent from '../components/CircularComponent'
import { Text } from 'react-native-svg'
import CardImageComponent from '../components/CardImageComponent'
import ArvatarGroup from '../components/ArvatarGroup'
import ProgressBarComponent from '../components/ProgressBarComponent'

const HomeScreen = ({navigation} :  any) => {
    return (
        <View style={{ flex: 1}}>
            <Container  isScroll >
                <SpaceComponent  height={20}/>
           
                <SectionComponent >
                    <RowComponent justify='space-between'>
                        <Element4 size={24} color='black' />
                        <Notification size={24} color='black' />
                    </RowComponent>
                </SectionComponent>

                <SectionComponent >
                    <RowComponent justify='flex-start'>
                        <TextComponent text='He,Duc Phu' font='bold' bold={true} />
                    </RowComponent>
                </SectionComponent>

                <SectionComponent >
                    <RowComponent justify='flex-start'>
                        <TextComponent text='Be Productive Today' size={24} bold={true} />
                    </RowComponent>
                </SectionComponent>

                <SectionComponent >
                    <RowComponent styles={
                        [globalStyle.inputContainer]
                    } onPress={() => navigation.navigate('SearchScreen')}>
                        <TextComponent text='Search task' size={15} color={appColor.hint_text} styles={{ marginStart: 10, padding: 5 }} />
                        <SearchNormal1 size={20} color={appColor.hint_text} />
                    </RowComponent>
                </SectionComponent>

                <SectionComponent>
                    <CardComponent>
                        <RowComponent >
                            <View style={{ flex: 1 }}>
                                <TextComponent text='Task Progress' bold={true} size={20} />
                                <TextComponent text='30/4 task done' size={15} />
                                <SpaceComponent height={10} />
                                <RowComponent justify='flex-start'>
                                    <TagComponent text='Match 22' textColor='white' onPress={() => console.log('satejs')} />
                                </RowComponent>
                            </View>
                            <View >
                                <CircularComponent value={80} />
                            </View>
                        </RowComponent>
                    </CardComponent>
                </SectionComponent>

                <SectionComponent>
                    <RowComponent styles={{ alignItems: 'flex-start' }}>
                        <View style={{ flex: 1 }} >
                            <CardImageComponent styles={{ flex: 1, alignItems: 'flex-start' }}>
                                <TouchableOpacity style={globalStyle.iconContainer}>
                                    <Edit2 size={24} color='white' />
                                </TouchableOpacity>
                                <SpaceComponent height={20} />
                                <TextComponent text='UX Design' bold={true} color='white' size={24} flex={0} />
                                <TextComponent text='Task Managerment Mobie App' color='white' flex={0} />
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <ArvatarGroup />
                                    <SpaceComponent height={16} />
                                    <ProgressBarComponent percent='90' />
                                </View>

                                <View style={{ position: 'absolute', bottom: 0, marginBottom: 10, paddingStart: 10 }}>
                                    <TextComponent text='Due, 2023 Match 03' color='white' size={14} flex={0} />
                                </View>
                            </CardImageComponent>
                            <SpaceComponent height={40} />

                        </View >
                        <SpaceComponent width={16} />
                        <View style={{ flex: 1 }}>
                            <CardImageComponent color='rgba(33,150,243,0.5)'>
                                <TouchableOpacity style={globalStyle.iconContainer}>
                                    <Edit2 size={24} color='white' />
                                </TouchableOpacity>
                                <TextComponent text='API Payment' bold={true} color='white' size={22} />
                                <SpaceComponent height={16} />
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <ArvatarGroup />
                                    <SpaceComponent height={16} />
                                    <ProgressBarComponent percent='90' color={appColor.yellow_1} />
                                </View>

                            </CardImageComponent>
                            <SpaceComponent height={16} />

                            <CardImageComponent color='rgba(18,181,22,0.6)' >
                                <TouchableOpacity style={globalStyle.iconContainer}>
                                    <Edit2 size={24} color='white' />
                                </TouchableOpacity>
                                <TextComponent text='Update Work' bold={true} color='white' size={24} />
                                <TextComponent text='Revision home page' color='white' />
                            </CardImageComponent>
                        </View>
                    </RowComponent>
                </SectionComponent>

                <SectionComponent>
                    <TextComponent bold={true} text='Urgents task' size={24} />
                    <SpaceComponent height={10} />
                    <CardComponent  >
                        <CircularComponent value={40} radius={35} />
                    </CardComponent>
                    <SpaceComponent height={100} />
                </SectionComponent>
            </Container>
            <View style={{
                position:'absolute'
                ,bottom:0,
                left:0,
                right:0,
                padding:20,
             
                alignItems:'center'
            }}>

                <TouchableOpacity
                onPress={() => navigation.navigate('AddNewTask')}
               
                 style={[globalStyle.row,{backgroundColor:'blue'
                ,justifyContent:'center',
                padding:10,
                borderRadius:100,
                width:'80%',
                
                }]}>
                    <TextComponent text='Add new task'   color='white' flex={0} />
                    <Add size={22} color='white' ></Add>
                </TouchableOpacity>

            </View>

        </View>


    )
}



export default HomeScreen