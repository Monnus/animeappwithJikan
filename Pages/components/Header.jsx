import React from 'react'

import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableOpacity} from 'react-native';

function Header({handelSetNavig}) {
  return (
   <View style={styles.container}>
        <Text style={{fontSize:30,fontWeight:"500"}}> <Text style={{color:"#38b6ff",fontSize:30,fontWeight:"500"}}>Ani</Text>Read</Text>
 <View style={styles.headerBtnView}>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopAnime")}><Text style={styles.btnHeader}>Top anime</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopManga")}> <Text style={styles.btnHeader}>Top manga</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopChar")}><Text style={styles.btnHeader}>Top Charactares</Text></TouchableOpacity>
 </View>

   </View>
  )
}

export default Header;

const styles=StyleSheet.create({
    container:{
    height:100,
    alignItems:"center",
justifyContent:"space-around",
         backgroundColor:"#CCB0B0",
         width:"100%",
    },
    headerBtnView:{
        flexDirection:"row",
justifyContent:"space-around",
width:"100%",
    },
      btnHeader:{
        color:"white",
        fontWeight:700,
        backgroundColor:"rgba(0,0,0,0.5)",
        width:"auto",
        height:"auto",
        padding:5,
      }  
})