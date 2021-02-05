import * as React from 'react'
import {ScrollView as Scroll, Text, Button} from 'react-native'
import Note from './Note'
import styles from './Styles/NoteListStyle'
const NotesList = ({notes}) => {
    return (
        <Scroll contentContainerStyle={styles.container}>
        {
            notes ? (
                notes.map(note =>{
                    return <Note key={note.id} note={note} />
                })
            ) : (
                <Text>Pas de notes.</Text>
            )

        }

        </Scroll>
        
    )
}
export default NotesList