import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';


function HomePage() {
const fatchApidata=async function(){
    try{
            const request=await fetch(`https://api.jikan.moe/v4/top/characters`);
            const data=await request.json();
console.log(data);
            return data;

    }catch(err){
        console.log(err);
    }
}

useEffect(()=>{
    fatchApidata();
},[])


  return (
 <SafeAreaView>
<Text>hello world</Text>

 </SafeAreaView>
  )
}

export default HomePage
