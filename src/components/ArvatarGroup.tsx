import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';

const AvatarGroup = () => {
    const uidsLength = 10;
    const url = 'https://inkythuatso.com/uploads/thumbnails/800/2022/03/anh-my-do-toa-nu-vuong-xinh-dep-5-16-17-09-21.jpg';

    return (
        <RowComponent styles={styles.row}>
            {Array.from({ length: uidsLength }).map((item, index) => (
                index < 3 && (
                    <Image
                        key={index}
                        source={{ uri: url }}
                        style={[
                            styles.avatar,
                            { marginLeft: index > 0 ? -10 : 0 }
                        ]}
                    />
                )
            ))}
            {uidsLength > 5 && (
                <View style={styles.moreContainer}>
                    <TextComponent 
                    styles={styles.moreText}  
                    text={`+${uidsLength - 3 > 9 ?  9 : uidsLength-3}`}  
                    size={13} 
                    bold={true} 
                    flex={0} />
                </View>
            )}
        </RowComponent>
    );
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16, 
        borderWidth: 2,
        borderColor: 'white',
    },
    moreContainer: {
        width: 32,
        height: 32,
        borderRadius: 16, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -5,
        position: 'relative',
        borderWidth:1,
        borderColor:'gray',
        
    
        
        
    },
    moreText: {
        textAlign: 'center',
    }
});

export default AvatarGroup;
