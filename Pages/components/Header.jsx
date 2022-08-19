import React,{useState}from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dropdown} from "react-native-element-dropdown"
import AntDesign from 'react-native-vector-icons/AntDesign';

function Header({handelSetNavig}) {
  const [value, setValue] = useState(null);
  const [Focus, setFocus] = useState(false);
  console.log(value);
 const DATA=[
  { label: 'React Naive', value: '1' },
  { label: 'Javascript', value: '2' },
  { label: 'Laravel', value: '3' },
  { label: 'PHP', value: '4' },
  { label: 'jQuery', value: '5' },
  { label: 'Bootstrap', value: '6' },
  { label: 'HTML', value: '7' },
  { label: 'CSS', value: '8' },
 ]
  return (
   <View style={styles.container}>
        <Text style={{fontSize:30,fontWeight:"500"}}> <Text style={{color:"#38b6ff",fontSize:30,fontWeight:"700"}}>Ani</Text>Read</Text>
 <View style={styles.headerBtnView}>
  <Dropdown data={DATA} style={[styles.dropdown,Focus&& {borderColor:"blue"}]}
         placeholderStyle={styles.placeholderStyle}
         selectedTextStyle={styles.selectedTextStyle}
         inputSearchStyle={styles.inputSearchStyle}
         iconStyle={styles.iconStyle}
       search
       maxHeight={300}
       labelField="label"
       valueField='value'
       placeholder={!Focus?"select item":"..."}
       searchPlaceholder="Search.."
       value={value}
       onFocus={()=>setFocus(true)}
       onBlur={()=>setFocus(true)}
       onChange={item=>{setValue(item.value);setFocus(false)}}
       renderLeftIcon={()=>(
        <AntDesign style={styles.icon} color={Focus ? "blue" : "black"}
        name="Safety"
        size={15}
        />
       )}
  />

        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopAnime")}><Text style={styles.btnHeader}>Top anime</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopManga")}> <Text style={styles.btnHeader}>Top manga</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopChar")}><Text style={styles.btnHeader}>Top Charactares</Text></TouchableOpacity>
 </View>
<Text style={{fontSize:20, fontWeight:800,backgroundColor:"rgba(0,0,1,0.4"}}>Seasonal animal is winter</Text>
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
         marginBottom:"10px"
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
      }  ,
      containerDropdown: {
        backgroundColor: 'white',
        paddingTop: 30,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 20,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})