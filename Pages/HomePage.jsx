import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';
import Header from './components/Header';
import {Button} from "react-native-paper"
import CardComponents from './components/CardComponents';
import Search from './components/Search';
function HomePage({navigation}) {
    // =====================================states of the head=================================
    const [value, setValue] = useState(false);
    const [Focus, setFocus] = useState(false);
    const [seasonValue,setSeasonValue]=useState(false);
     const [seasonFocus,setseasonFocus]=useState(false);
    // =========================== states of the body===========================================
    const [getTopChar,setTopChar]=useState([]);
    const [getTopManga,setTopManga]=useState([]);
    const [getTopAnime,setTopAnime]=useState([]);
    const [animeList,setAnimeList]=useState([]);
    const [identifier,setIdentifier]=useState("");
    const [search,getSearch]=useState("");
    const [seasonanimeList,getSeasonanimeList]=useState([]);

// =====================================fetch anime manga and char list============================
const fetchApiCharacterdata2=async function(){
    try{
        const data= await Promise.all([
            fetch(`https://api.jikan.moe/v4/top/characters`).then((res)=>res.json()), 
            fetch("https://api.jikan.moe/v4/top/manga").then((res)=>res.json()),
            fetch("https://api.jikan.moe/v4/top/anime").then((res)=>res.json()),
            ]);
                    setTopChar(data[0].data.slice(0,10));
                    setTopManga(data[1].data.slice(0,10));
                    setTopAnime(data[2].data.slice(0,10));
                    console.log(data);
    }catch(err){
        console.log(err);
    }
}
const fatchApiCharacters=async function(){
    try{
    const seasondata=await fetch(`https://api.jikan.moe/v4/seasons/2022/Winter`).then((res)=>res.json())
    setTimeout(() => {
        fetchApiCharacterdata2();
    }, 4000);   
        getSeasonanimeList(seasondata.data);
        setIdentifier("season")
    }catch(err){
        console.log(err);
    }
}
// =============================get identifer fun=================================================
function handelSetNavig(query){
    setIdentifier(query);
}
console.log(identifier);

useEffect(()=>{
    fatchApiCharacters();
},[])
// ==========================fatch async anime=====================
 const FetchAnime= async function(query){
            const temp=await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`) .then(res=>res.json());
            console.log("anime list recieved",temp.results);
            setAnimeList(temp.results);
            handelSetNavig("search");
    }
// ========================async fatch season Anime============================
    const fatchSeasonAnime=async function(year=2022,season="Winter"){
        
    try{
       
        const seasondata=await fetch(`https://api.jikan.moe/v4/seasons/${year||2022}/${season||"winter"}`).then((res)=>res.json());
        getSeasonanimeList(seasondata.data);
        setIdentifier("season")
    }catch(err){ 
        console.log(err);
    }
}
useEffect(()=>{
    if(value||seasonValue){
        fatchSeasonAnime(value,seasonValue)
    }
},[value,seasonValue]) 
console.log(seasonValue);
    function handleSearch(){
                    FetchAnime(search)
                }
  return (
 <SafeAreaView style={styles.container}>
    <View style={{}}>

    <Search handleSearch={handleSearch} search={search} getSearch={getSearch}/>
    <Header navigation={navigation} handelSetNavig={handelSetNavig} setValue={setValue} value={value} setFocus={setFocus} Focus={Focus} setSeasonValue={setSeasonValue} seasonValue={seasonValue} seasonFocus={seasonFocus} setseasonFocus={setseasonFocus}/>
    <CardComponents getTopAnime={getTopAnime} getTopChar={getTopChar} getTopManga={getTopManga} identifier={identifier} navigation={navigation } animeList={animeList} seasonanimeList={seasonanimeList}/>
    </View>

 </SafeAreaView>
  )
}

export default HomePage
const styles=StyleSheet.create({
    container:{
        flex:1,
        height:"auto",
        backgroundColor:"#f5f5f5",
        width:"100%",
    }
})