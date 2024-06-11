import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

interface Props {
    size?: 'small' | 'default' | 'large'
    color?: string
    percent?: string
}

const ProgressBarComponent = (props: Props) => {
    const { size, color, percent } = props;


    const widthPercent = percent ? parseFloat(percent) / 100 : 0;

    return (
        <View>
            <View style={styles.view}>
                <View style={[styles.view2, { width: `${widthPercent * 100}%`,backgroundColor: color ?? 'white'  }]} />
            </View>

            <RowComponent styles={{ justifyContent: 'space-between', marginTop: 2 }}>
                <TextComponent text='Progress' color='white' size={15} />
                <TextComponent text={`${percent}%`} color='white' size={15} flex={0}  bold={true}/>
            </RowComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 8,
        width: '100%',
        backgroundColor: 'rgba(99,1,100,0.9)',
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 100,
    },
    view2: {
      
        height: 8,
        borderRadius: 100
    }
});

export default ProgressBarComponent;
