import { Platform, StyleSheet } from "react-native";
import Container from "../components/Container";
import { fontFammilies } from "../constants/fontFamily";
import { appColor } from "../constants/colors";

export const globalStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'ios' ? 42 : 0
    },
    text: {

        color: 'black',
        fontSize: 16,
        fontFamily: fontFammilies.regular
    },

    inputContainer: {
        backgroundColor: appColor.gray,
        borderRadius: 12,
        paddingHorizontal: Platform.OS === 'ios' ? 10 : 12,
        paddingVertical: 10,
    

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    section: {
        marginBottom: 16,
        paddingHorizontal:20,
      
 
    }

    , tag: {
        paddingHorizontal: 16
        , paddingVertical: 5,
        borderRadius: 100,
        backgroundColor: 'blue'
    },
    card: {
        padding: 12,
        borderRadius: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginBottom:16

    }
})