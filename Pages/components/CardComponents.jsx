import React,{useState} from 'react'
import {View,Text,StyleSheet,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as webBrowser from  "expo-web-browser";
export default  function CardComponents({ getTopAnime, getTopChar, getTopManga ,identifier,navigation,animeList}) {
   


console.log("in card com " ,animeList);
return(
    <View style={{flex:1}}>

    {(()=>{
if(identifier=="search"){
return(
  <View>
  {animeList.map(data=>{
    return(
      <View style={{ padding:"20",height:200,flexWrap:"wrap",width:"100%",backgroundColor:"#CCB0B0",marginBottom:5,marginTop:2}} key={data.mal_id}>
            <View style={{ padding:"20",flex:1,width:"100%",backgroundColor:"white",width:"90%",flexWrap:"wrap"}}><View style={{ padding:"20",flex:1,flexDirection:"row",width:"100%"}}>
                <Card.Cover source={{ uri: `${data.image_url}` }} style={{ resizeMode: 'cover',height:"200",width:100}}/>
                <View style={{flexWrap:"wrap",height:"auto",width:"100%"}}>
                  <Text style={{flex:1,fontSize:15,color:"darkgray",fontWeight:600,flexWrap:"wrap"}}>{data.title}</Text>
                    <Text>score:{data.score}</Text>
                    <Text>Rated:{data.rated}</Text>
                    <Text>Type:{data.type}</Text>
                </View>
                  </View>
                    <View style={{ flexDirection:"row",flex:1,}}>
                  <Button  style={{width:100,height:"50px"}}mode="contained" onPress={()=>webBrowser.openBrowserAsync(data.url)}>More</Button>
                  <Button>Ok</Button>
                  </View>
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
                        <Card key={data.mal_id} style={styles.card}>
                        <Card.Cover source={{ uri: `${data.images.jpg.image_url}` }} />
                        <Card.Title />
                        <Card.Content>
                          <Title>{data.title}</Title>
                          <Paragraph>Charactor nicknames:{data.title_synonyms.join(" ")}</Paragraph>
                          <Paragraph>duration:{data.duration} with {data.episodes}</Paragraph>
                     
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
    </View>
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

