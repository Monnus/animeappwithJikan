import React,{useState} from 'react'
import {View,Text,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as webBrowser from  "expo-web-browser";
export default  function CardComponents({ getTopAnime, getTopChar, getTopManga ,identifier,navigation }) {
   


console.log("in card com " ,identifier);
return(
    <View style={{flex:1}}>

    {(()=>{
        if(identifier==="TopAnime"){
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

