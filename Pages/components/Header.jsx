import React,{useState}from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {Dropdown} from "react-native-element-dropdown"
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getAuth,signOut} from "firebase/auth";

function Header({navigation,handelSetNavig,setValue,value,setFocus,Focus,setSeasonValue,seasonValue,seasonFocus,setseasonFocus}) {

  console.log(value,seasonValue);
 const DATA=[
  { label: '2022', value: 2022 },
  { label: '2021', value: 2021},
  { label: '2020', value: 2020},
  { label: '2019', value: 2019},
  { label: '2018', value: 2018},
  { label: '2017', value: 2017},
  { label: '2016', value: 2016},
  { label: '2015', value: 2015},
 ]
 const Data2=[
{ label:"Spring",value:"Spring" },
{ label:"Summer",value:"Summer" },
{ label:"Fall",value:"Fall"},
{ label:"Winter",value:"Winter"}
]

function handleSignout(){
    const auth=getAuth();
    signOut(auth).then((response)=>{
            console.log(response);
            navigation.navigate("registation");     
    }).catch(err=>console.log(err))

}
  return (
   <View style={styles.container}>
             <Text style={{color:"purple",fontSize:20}} onPress={()=>handleSignout()}>Logout <AntDesign style={styles.icon}
              color={Focus ? "blue" : "#38b6ff"}name="logout"
              size={20}
        /></Text>
          
        <Text style={{fontSize:30,fontWeight:"500"}}>
             <Text style={{color:"#38b6ff",fontSize:30,fontWeight:"700"}}>Ani</Text>Read</Text>
 <View style={styles.headerBtnView}>


        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopAnime")}><Text style={styles.btnHeader}>Top anime</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopManga")}> <Text style={styles.btnHeader}>Top manga</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={()=>handelSetNavig("TopChar")}><Text style={styles.btnHeader}>Top Charactares</Text></TouchableOpacity>
 </View>
<Text style={{fontSize:20, fontWeight:800}}> Anime 
<Dropdown
data={Data2} style={[styles.dropdown,seasonFocus&& {borderColor:"blue"}]}
        placeholderStyle={styles.placeholderSgittyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={300}
        labelField="label"
        valueField='value'
        placeholder={!seasonFocus?"winter":"Winter"}
        searchPlaceholder="Search.."
        value={seasonValue}
        onFocus={()=>setseasonFocus(true)}
        onBlur={()=>setseasonFocus(true)}
       onChange={item=>{setSeasonValue(item.value);setseasonFocus(false)}}
       renderLeftIcon={()=>(
        <AntDesign style={styles.icon} color={seasonFocus ? "black" : "blue"}
        name="Safety"
        size={15}
       />
       )}
       /> in year
         <Dropdown data={DATA} style={[styles.dropdown,Focus&& {borderColor:"blue"}]}
         placeholderStyle={styles.placeholderSgittyle}
         selectedTextStyle={styles.selectedTextStyle}
         inputSearchStyle={styles.inputSearchStyle}
         iconStyle={styles.iconStyle}
       search
       maxHeight={300}
       labelField="label"
       valueField='value'
       placeholder={!Focus?"2022":"2022"}
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
       </Text>
   </View>
  )
}

export default Header;

const styles=StyleSheet.create({
    container:{
    height:"auto",
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
        borderColor: 'skyblue',
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