import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios'
const API_URL = 'http://localhost:1337'

const getToken = async () =>{
    try {
        const token = await AsyncStorage.getItem('userToken')
        return token
    } catch (error) {
        console.error(error)
        return null
    }
}
const getNotes = async () => {
    const token = await getToken()
    if(token){
        try {
            const response = await axios(`${API_URL}/notes`, {
                headers: {
                    Authorization : 'Bearer '+token
                }
            })
            return response.data
            
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = {
    getNotes
}