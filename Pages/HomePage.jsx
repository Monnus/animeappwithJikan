import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';
import Header from './components/Header';
import {Button} from "react-native-paper"
import CardComponents from './components/CardComponents';
import Search from './components/Search';
function HomePage({navigation}) {
    const [getTopChar,setTopChar]=useState([]);
    const [getTopManga,setTopManga]=useState([]);
    const [getTopAnime,setTopAnime]=useState([]);
    const [animeList,setAnimeList]=useState([]);
    const [identifier,setIdentifier]=useState("");
    const [search,getSearch]=useState("");
    const [seasonanimeList,getSeasonanimeList]=useState([])
  console.log(search);

const fatchApiCharacters=async function(){
    try{
    //  const charData=await fetch(`https://api.jikan.moe/v4/top/characters`).then((res)=>res.json());
    //  const mangaData=await fetch("https://api.jikan.moe/v4/top/manga").then((res)=>res.json());
    //  const animeData= await fetch("https://api.jikan.moe/v4/top/anime").then((res)=>res.json());
   const data= await Promise.all([
    fetch(`https://api.jikan.moe/v4/top/characters`).then((res)=>res.json()), 
   fetch("https://api.jikan.moe/v4/top/manga").then((res)=>res.json()),
   fetch("https://api.jikan.moe/v4/top/anime").then((res)=>res.json()) ]);

           setTopChar(data[0].data.slice(0,10));
           setTopManga(data[1].data.slice(0,10));
           setTopAnime(data[2].data.slice(0,10));  
            console.log("requested char,Manga,Anime",data);
    }catch(err){
        console.log(err);
    }
}

function handelSetNavig(query){
    setIdentifier(query);
}
console.log(identifier);

useEffect(()=>{
    fatchApiCharacters();
},[])

 const FetchAnime= async function(query,year=2022,season="winter"){
            const seasondata=await fetch(`https://api.jikan.moe/v3/season/${year}/${season}`).then((res)=>res.json());
            const temp=await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc`) .then(res=>res.json());
            console.log("anime list recieved",temp.results);
            setAnimeList(temp.results);
            getSeasonanimeList(seasondata);
            handelSetNavig("search");
    }
    console.log(seasonanimeList,"season anime recieved starts with winter");

                function handleSearch(){
                    FetchAnime(search)
                }

  return (
 <SafeAreaView style={styles.container}>
    <View style={{}}>

    <Search handleSearch={handleSearch} search={search} getSearch={getSearch}/>
    <Header handelSetNavig={handelSetNavig}/>
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