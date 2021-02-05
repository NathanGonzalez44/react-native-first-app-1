import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './Styles/NoteStyle'

const Note= ({note}) => {
    return (
        <View style={styles.container}>
            <Text>{note.title}</Text>
            <Text>{note.body}</Text>
        </View>
    )
}
export default Note