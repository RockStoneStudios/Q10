import { StyleSheet, Text, View ,Modal, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../config/Colors';



const MyModal = ({isModal,setIsModal,item}:any) => {
  return (
     <>
        <Modal
         visible={isModal}
         transparent
         animationType='slide'
       
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalStyle}>
                <TouchableOpacity style={styles.close} onPress={()=>setIsModal(!isModal)}>
                    <Text style={styles.Xclose}>X</Text>
                </TouchableOpacity>
                   <Text style={styles.name}>{item.name}</Text>
                   <View style={styles.imageContainer}>
                     <Image style={styles.image} source={{uri : `${item.image}`}} />
                   </View>
                   <View style={styles.infoContainer}>
                      <View>
                        <Text style={styles.characteristic}>Estado : </Text>
                        <Text style={styles.characteristic}>Especie : </Text>
                        <Text style={styles.characteristic}>Genero : </Text>
                        <Text style={styles.characteristic}>Origen : </Text>

                      </View>
                      <View>
                       <Text style={styles.characteristicValue}>{item.status}</Text>
                       <Text style={styles.characteristicValue}>{item.species}</Text>
                       <Text style={styles.characteristicValue}>{item.status}</Text>
                       <Text style={styles.characteristicValue}>{item.origin.name}</Text>
                      </View>
                   </View>
                </View>
            </View>
        </Modal>
     </>
  )
}

export default MyModal

const styles = StyleSheet.create({
    modalContainer :{
        flex : 1,
        justifyContent : 'flex-end'
    },
    modalStyle :{
        backgroundColor : '#fff',
        margin : 20,
        borderRadius : 10,
        paddingHorizontal : 30,
        paddingVertical : 20,
        alignItems : 'center',
        shadowColor : "#000",
        shadowOffset :{
            width :0,
            height :2
        },
        shadowOpacity : 0.28,
        shadowRadius : 4,
        elevation : 5
    },
    name : {
        fontSize : 20,
        fontWeight : '700',
        marginVertical : 5,
        color : COLORS.secondary
    },
    imageContainer : {
        width : 120,
        height : 120,
        marginVertical : 10
       
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 30
      
    },
    infoContainer :{
        flexDirection  :'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    characteristic:{
        fontSize : 16,
        fontWeight : '800',
        color : "#2aa"
    },
    characteristicValue : {
       fontWeight : '600',
       color : '#121',
       fontSize : 15
    },
    close : {
        width : 35,
        height : 35,
        backgroundColor : COLORS.close,
        borderRadius : 20,
        position : 'absolute',
        top : -15,
        right : 5,
                
    },
    Xclose : {
         textAlign : 'center',
        fontSize : 18,
        fontWeight : '900',
        color : COLORS.separator
    }
})