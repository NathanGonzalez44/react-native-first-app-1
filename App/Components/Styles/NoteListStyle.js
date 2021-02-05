import { StyleSheet } from 'react-native'
import { darkTheme } from '../../Theme/Colors'


export default StyleSheet.create({
    container : {
        flex : 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        margin: 0,
    },
    screen:{
        flex:1,
        justifyContent : 'center',
        backgroundColor : darkTheme.background,
        padding : 5,
    }
})