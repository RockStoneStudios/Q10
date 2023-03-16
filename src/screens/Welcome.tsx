import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(()=>{
      setTimeout(()=>{
          navigation.navigate('Home')
      },2100)
  },[])
  return (
    <View style={styles.container}>
      <Text style={{fontSize : 35}}>Q10</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})