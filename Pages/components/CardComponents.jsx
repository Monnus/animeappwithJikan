import React,{useState} from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as webBrowser from  "expo-web-browser";
export default  function CardComponents({ getTopAnime, getTopChar, getTopManga ,identifier,navigation,animeList,seasonanimeList}) {
   
console.log("Testing years and seasons",seasonanimeList);

// console.log("in card com " ,animeList);
console.log("top anime list ",getTopAnime)
return(
    <>

    {(()=>{
if(identifier=="search"){
return(
  <View>
  {animeList.map(data=>{
    return(


<View style={{height:310,width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"20px"}} key={data.mal_id}>
<View style={{flex:1,width:"90%",backgroundColor:"white"}}>
    <View style={{height:190,width:"100%",backgroundColor:"white", marginBottom:"5px"}}> 
    <Card.Cover source={{ uri: `${data.image_url}` }} style={{ resizeMode:"cover",height:"100%",width:"100%"}}/>
    </View>
    <View style={{backgroundColor:"rgba(128, 128, 128,0.6)",height:80,width:"100%"}}>
    <Text style={{flexWrap:"wrap",fontSize:15,color:"darkgray",fontWeight:600,flexWrap:"wrap"}}>{data.title}</Text>
    <Text>Rated:{data.rated}</Text>
    <Text>Type:{data.type}</Text>
    </View>
       
    <Button mode="contained" style={{height:30}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
</View>
</View>
    )
  })}
 </View>
  )

}else if(identifier=="season"){
return (
    <View style={{height:"auto",width:"auto"}}>

  
    {seasonanimeList.map(data=>{
        return(
            <View style={{height:"590px",width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"20px"}} key={data.mal_id}>
            <View style={{flex:1,backgroundColor:"white",width:"90%"}}>
            <View style={{height:"40%",width:"100%",backgroundColor:"white",marginBottom:"5px"}}>
                    <Card.Cover source={{uri:`${data.images.jpg.image_url}`}} style={{resizeMode:"center",height:"100%",width:"100%"}}/>
                    </View>
                    <View  style={{backgroundColor:"gray",height:80,width:"100%"}} >
            <Text style={{flexWrap:"wrap",fontSize:15,color:"darkgray",fontWeight:600,flexWrap:"wrap"}}>{data.title}</Text>
            <Text>Genres:{data.genres.map(data=>`${data.name}, `)}</Text>
            <Text>Rated:{data.rating}</Text>
            <Text>Availble in:{data.source} , Status: {data.status}</Text>
                    </View>
    <Button mode="contained" style={{height:30}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
    <View style={{height:"35%",width:"100%",backgroundColor:"white"}}>
    <Card.Cover source={{uri:`${data.trailer.images.small_image_url}`}} style={{resizeMode:"cover",height:"100%",width:"100%"}}/>
    </View>
    <Button mode="contained" style={{height:30}}  onPress={()=>webBrowser.openBrowserAsync(data.trailer.embed_url)}>Play Trailer</Button>
            </View>
           </View>
        )
    })}
    
    </View>

)
}else if(identifier=="TopAnime"){
    return(
        <View style={{height:"auto",width:"auto"}}>
                    {getTopAnime.map((data)=>{
                        return(
                    <View style={{height:"300px",width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"20px"}} key={data.mal_id}>
                    <View style={{flex:1,backgroundColor:"white",width:"90%"}}>
                    <View style={{height:190,width:"100%",backgroundColor:"white",marginBottom:"5px"}}>
                    <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} style={{ resizeMode: 'cover',height:"100%",width:"100%"}}/>
                        </View>
        <View  style={{backgroundColor:"gray",height:80,width:"100%",padding:"auto"}} >
        <Text style={{ flexWrap:"wrap",fontSize:15, color:"darkgray", fontWeight:600,flexWrap:"wrap"
        }}>{data.title}
        </Text>
        <Text>duration:{data.duration} with {data.episodes}</Text>
        </View>
        <Button mode="contained" style={{height:30}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
            </View>
    </View>
    
                    )
                })}
                
             </View>
               
            )
              
        }else if(identifier=="TopManga"){
            return(
                <View style={{height:"auto",width:"auto"}}>
                     {getTopManga.map((data)=>{
                    return(
                    <View style={{height:"auto",width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"20px"}} key={data.mal_id}>
                    <View style={{flex:1,backgroundColor:"white",width:"90%"}}>
                    <View style={{height:190,width:"100%",backgroundColor:"white",marginBottom:"5px"}}>
                       
                        <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} />
                        </View>
                
                     <View  style={{backgroundColor:"gray",height:"auto",width:"100%",padding:"auto"}} >
                          <Title>{data.title}</Title>
                          <Paragraph>{data.synopsis}</Paragraph>
                          <Paragraph>Rank:{data.rank} with score{data.score}</Paragraph>
                     </View>
                          <Button mode="contained" onPress={()=>webBrowser.openBrowserAsync(data.url)}>More</Button>
                     </View>
                     </View>
                    )
                })}
                </View>
 
            )
        }else if(identifier==="TopChar"){
            return(
                <View style={{height:"auto",width:"auto"}}>
                {getTopChar.map((data)=>{
                    return(
                        <View style={{height:"auto",width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"20px"}} key={data.mal_id}>
                         <View style={{flex:1,backgroundColor:"white",width:"90%"}}>
                         <View style={{height:190,width:"100%",backgroundColor:"white",marginBottom:"5px"}}>
                        <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} style={styles.image}/>
                        </View>
                     <View  style={{backgroundColor:"gray",height:"auto",width:"100%",padding:"auto"}} >
                        <Card.Title title="Top  10 Characters " />
                          <Title>{data.name}</Title>
                          <Paragraph>Charactor nicknames:{data.nicknames.join(" ")}</Paragraph>
                        </View>
                          <Button mode="contained" onPress={()=>webBrowser.openBrowserAsync(data.url)}>More</Button>
                  </View>
                  </View>
                    )
                })}
                
             </View>
            )
        }else{
            return(
           <View ><Text></Text></View>
            )
        }
    })()}
    </>
)

}

const styles=StyleSheet.create({
    cardContainer:{
        width:"50%",
        height:"100px",
        justifyContent:"space-between",
        padding:"auto",
    },
    card:{
        marginBottom:"10px",
        flexDirection:"row",
        width:"100%",
        height:"auto"
    },
    image:{
      width:200,
      height:300,
    }
    
})

{/* 
         <View style={{height:"450px",width:"90%",backgroundColor:"white",padding:"10,0,0,10",}}>
            <View Style={{height:400,backgroundColor:"lightgray",width:"100%",flexDirection:"row"}}>
                <View style={{height:"100%",width:100,backgroundColor:"white",marginBottom:"5px"}}>
                    <Card.Cover source={{uri:`${data.images.jpg.image_url}`}} style={{resizeMode:"cover",height:"100%",width:"100%"}}/>
                    </View>
                    <View  style={{backgroundColor:"gray",height:100,width:"100%"}} >
            <Text>Genres:{data.genres.map(data=>`${data.name},`)}</Text>
            <Text style={{flexWrap:"wrap",fontSize:15,color:"darkgray",fontWeight:600,flexWrap:"wrap"}}>{data.title}</Text>
            <Text>Rated:{data.rating}</Text>
            <Text>Availble in:{data.source} , Status: {data.status}</Text>
                    </View>
            </View>
    <Button mode="contained" style={{height:50}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
        </View>

<View style={{height:"40%",width:180,backgroundColor:"white",marginBottom:"5px"}}>
<Card.Cover source={{uri:`${data.trailer.images.small_image_url}`}} style={{resizeMode:"cover",height:"100%",width:"100%"}}/>
</View>
<Button mode="contained" style={{height:50}}  onPress={()=>webBrowser.openBrowserAsync(data.trailer.embed_url)}>Play Trailer</Button> */}
