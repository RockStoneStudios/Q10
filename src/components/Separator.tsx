import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { COLORS } from '../config/Colors';

const Separator = () => {
  return (
  <View style={styles.separator}/>
  )
}

export default Separator

const styles = StyleSheet.create({
    separator : {
      
        height : 2,
        backgroundColor : COLORS.separator,
        marginHorizontal : 60,
        marginVertical : 20
    }
})