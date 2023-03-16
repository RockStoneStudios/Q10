import {
        StyleSheet,
        Text, 
        View,
        Image, 
        Touchable,
        TouchableOpacity,
        Modal
     } from 'react-native'
import React, { useState } from 'react'
import Separator from './Separator'
import MyModal from './MyModal';

const CardCharacter = ({item}:any) => {
    const [isModal,setIsModal] = useState(false);

  return (
    <View>
        <TouchableOpacity activeOpacity={0.68} onPress={()=> setIsModal(true)}>
            <View style={styles.containerImage}>
            <Image source={{uri : `${item.image}`}}  style={styles.image}/>
            <View style={styles.containerInfo}>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.specie}>{item.species}</Text>
                    </View>
                
            </View>
            </View>
            <Separator/>
       </TouchableOpacity>
      
       <MyModal isModal={isModal} setIsModal={setIsModal} item={item} />
    </View>
  )
}

export default CardCharacter

const styles = StyleSheet.create({
  containerImage :{
    margin : 10,
    borderBottomColor : "#fe9111",
    borderBottomWidth : 0.8,
    borderBottomLeftRadius : 5
  },
  image:{
    width : '100%',
    aspectRatio : 6/4,
    borderTopLeftRadius : 7,
    borderTopRightRadius : 7,
    resizeMode : 'cover'
  },
  containerInfo:{
    backgroundColor :'#fff'
  },
   info : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    padding : 8
   },
   name:{
      marginRight : 20,
      fontWeight : '700',
      color : "#123"
   },
   specie:{
     color : "#1ae"
   }
})