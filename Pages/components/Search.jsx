import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView,TextInput,
TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons"
function Search({handleSearch,getSearch,search}) {
    const [captureStateTxt,setcaptureStateTxt]=useState("")

  return (
<View style={Styles.coontainerSearch}>
   <TextInput
    placeholder='search'
     value={search}
     onChangeText={(e)=>getSearch(e)} 
    style={Styles.textInput}/>
    <TouchableOpacity onPress={handleSearch}>
    <Ionicons name="ios-search-circle" size={50} color="white" />
    </TouchableOpacity>
</View>
  )
}

export default Search

const Styles=StyleSheet.create({
    coontainerSearch:{
        width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"black",
      borderRightWidth:"none",         
      

    },
    textInput:{
        color:"white",
        height:"100%",
        fontSize:20,
        borderBottomWidth:"none",
        borderTopWidth:"none",
        borderLeftWidth:"none",
        borderWidth:"none",
        paddingLeft:10,
    }
})