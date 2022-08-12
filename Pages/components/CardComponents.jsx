import React,{useState} from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as webBrowser from  "expo-web-browser";
export default  function CardComponents({ getTopAnime, getTopChar, getTopManga ,identifier,navigation,animeList}) {
   


console.log("in card com " ,animeList);
return(
    <>

    {(()=>{
if(identifier=="search"){
return(
  <View>
  {animeList.map(data=>{
    return(


<View style={{height:200,width:"100%",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"10px"}} key={data.mal_id}>
<View style={{height:"100%",width:"90%",backgroundColor:"white",padding:"10,0,0,10"}}>
        <View style={{flex:2,width:"100%",flexDirection:"row"}}>
    <View style={{height:"100%",width:100,backgroundColor:"white"}}> <Card.Cover source={{ uri: `${data.image_url}` }} style={{ resizeMode: 'cover',height:"100%",width:"100%"}}/></View>
    <View style={{flex:1,flexWrap:"wrap",width:"100%"}}><Text style={{flexWrap:"wrap",fontSize:15,color:"darkgray",fontWeight:600,flexWrap:"wrap"}}>{data.title}</Text>
    <Text>Rated:{data.rated}</Text>
    <Text>Type:{data.type}</Text>
    </View>
        </View>
    <Button mode="contained" style={{height:50}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
</View>
</View>
    )
  })}
 </View>
  )

}else if(identifier==="TopAnime"){
            return(
                <View style={styles.cardContainer}>
                {getTopAnime.map((data)=>{
                    return(
        
    <View style={{height:"auto",width:"500",backgroundColor:"#CCB0B0",justifyContent:"flex-start",marginBottom:"10px"}} key={data.mal_id}>
    <View style={{height:"100%",width:"90%",backgroundColor:"white",padding:"10 0 0 10"}}>
            <View style={{flex:2,width:"100%",}}>
        <View style={{height:200,width:100,backgroundColor:"white"}}> <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} style={{ resizeMode: 'cover',height:"100%",width:"100%"}}/></View>
        <View style={{flex:1,flexWrap:"wrap",width:"100%"}}><Text style={{
        flexWrap:"wrap",
        fontSize:15,
        color:"darkgray",
        fontWeight:600,
        flexWrap:"wrap"}}>{data.title_synonyms.join(" ")}</Text>
        <Text>duration:{data.duration} with {data.episodes}</Text>
        </View>
            </View>
        <Button mode="contained" style={{height:50}}  onPress={()=>webBrowser.openBrowserAsync(data.url)}>more</Button>
    </View>
    </View>
                    )
                })}
                
             </View>
               
            )
        }else if(identifier==="TopManga"){
            return(
                <View style={styles.cardContainer}>
                {getTopManga.map((data)=>{
                    return(
                        <Card key={data.mal_id} style={styles.card}>
                        <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} />
                        <Card.Title />
                        <Card.Content>
                          <Title>{data.title}</Title>
                          <Paragraph>{data.synopsis}</Paragraph>
                          <Paragraph>Rank:{data.rank} with score{data.score}</Paragraph>
                     
                        </Card.Content>
                        <Card.Actions>
                          <Button onPress={()=>webBrowser.openBrowserAsync(data.url)}>More</Button>
                          <Button>Ok</Button>
                        </Card.Actions>
                      </Card>
                    )
                })}
                
             </View>
            )
        }else if(identifier==="TopChar"){
            return(
                <View style={styles.cardContainer}>
                {getTopChar.map((data)=>{
                    return(
                        <Card key={data.mal_id} style={styles.card}>
                        <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} style={styles.image}/>
                        <Card.Title title="Top  10 Characters " />
                        <Card.Content>
                          <Title>{data.name}</Title>
                          <Paragraph>Charactor nicknames:{data.nicknames.join(" ")}</Paragraph>
                        
                        </Card.Content>
                        <Card.Actions>
                          <Button onPress={()=>webBrowser.openBrowserAsync(data.url)}>More</Button>
                          <Button>Ok</Button>
                        </Card.Actions>
                      </Card>
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

