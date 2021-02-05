import * as React from 'react';
import {View, Text } from 'react-native';
import {getNotes} from '../Services/Api'
import styles from '../Components/Styles/NoteListStyle'
import NotesList from '../Components/NotesList'
function NotesScreen() {
  const[data, setData] = React.useState('')
  React.useEffect(()=> {
    const fetchData = async () => {
      const notes = await getNotes()
      setData(notes)
    }
    fetchData()
  }, [])


  return (
    <View style={styles.screen}>
      <NotesList notes={data} />
    </View>
  );
}

export default NotesScreen
