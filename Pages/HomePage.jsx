import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native';
import Header from './components/Header';
import CardComponents from './components/CardComponents';
import Search from './components/Search';
function HomePage({navigation }) {
    const [getTopChar,setTopChar]=useState([]);
    const [getTopManga,setTopManga]=useState([]);
    const [getTopAnime,setTopAnime]=useState([]);
    const [animeList,setAnimeList]=useState([]);
    const [identifier,setIdentifier]=useState("");
    const [search,getSearch]=useState("");
  console.log(search);

const fatchApiCharacters=async function(){
    try{
     const charData=await fetch(`https://api.jikan.moe/v4/top/characters`).then((res)=>res.json());
     const mangaData=await fetch("https://api.jikan.moe/v4/top/manga").then((res)=>res.json());
     const animeData= await fetch("https://api.jikan.moe/v4/top/anime").then((res)=>res.json());
           setTopChar(charData.data.slice(0,10));
           setTopManga(mangaData.data.slice(0,10));
           setTopAnime(animeData.data.slice(0,10));  
console.log("here is anime data",animeData.data);
console.log("top Characters",charData.data);
console.log("top manga",mangaData.data);

            
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

const FetchAnime= async function(query){
const temp=await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
.then(res=>res.json());
console.log("anime list recieved",temp.results);
setAnimeList(temp.results);
}
function handleSearch(){
    FetchAnime(search)
}

  return (
 <SafeAreaView style={styles.container}>
    <Search handleSearch={handleSearch} search={search} getSearch={getSearch}/>
    <Header handelSetNavig={handelSetNavig}/>
    <CardComponents getTopAnime={getTopAnime} getTopChar={getTopChar} getTopManga={getTopManga} identifier={identifier} navigation={navigation } animeList={animeList}/>
 </SafeAreaView>
  )
}

export default HomePage
const styles=StyleSheet.create({
    container:{
        width:"100%",
    }
})