import { FlatList, StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react';
import {ApiRickMorty} from '../context/ApiContext';
import CardCharacter from '../components/CardCharacter';
import { COLORS } from '../config/Colors';
const Home = () => {
    const {characters} = useContext(ApiRickMorty);
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Personajes</Text>
     <FlatList 
      showsVerticalScrollIndicator={false}
      data={characters}
      renderItem={({item})=>(
        <CardCharacter item={item} />
      )}
     />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container :{
        backgroundColor : COLORS.primary,
        padding :5
    },
    title : {
        textAlign : 'center',
        marginVertical : 10,
        fontSize :20,
        fontWeight : '700',
        color: '#fff'
    }
})