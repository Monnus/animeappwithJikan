import React,{useState}from 'react'
import {TouchableOpacity,TextInput,ImageBackground,SafeAreaView,View,Text,StyleSheet} from "react-native";
import fire from '../firebaseconfig';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";


console.log(getAuth());
function RegisterScreen({navigation}) {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
console.log(email);
const id=1;

const handleAction = (id) => {
    const auth =getAuth();
    if (id === 1) {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            setEmail("")
            setPassword("")
            navigation.navigate('login'),
            console.log(response,"you have succesfully logged in");
            
        }).catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
    }
}

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require("../images/background-Image-reg.png")} style={styles.image}>

<View style={styles.overlay}>

<View style={styles.headingView}><Text style={styles.headingSize}><Text style={{color:"#38b6ff",fontWeight:"700",}}>Ani</Text>Read</Text></View>

<View style={styles.regitrationView}>
<TextInput placeholder='Email'
 placeholderTextColor="white"  style={styles.txtinput} onChangeText={(e)=>setEmail(e)} value={email}/>

<TextInput placeholder='Password'placeholderTextColor="white" style={styles.txtinput} onChangeText={(e)=>setPassword(e)} value={password}/>

</View>
<TouchableOpacity style={{
    borderRadius: 5,alignSelf:"center",
    width:150,height:50,
    paddingLeft:"7%",
    paddingTop:"1%",
    backgroundColor:"rgba(17, 112, 236,0.4)",
    marginTop:"50px"}}>
    <Text style={[styles.txtinput]} onPress={()=>handleAction(id)}>Submite</Text>
    </TouchableOpacity>
 
<View style={styles.footerView}>
<Text style={{color:'white'}}>If you already have acount <Text style={{color:"lightblue"}} onPress={()=>navigation.navigate("login")}>Sign in here</Text></Text>

</View>




</View>
        </ImageBackground>
    </SafeAreaView>

    )
}

export default RegisterScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
    },
    image:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center",
    },
    overlay:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.8)"
    },
    headingView:{
        width:"100%",
        height:100,
        backgroundColor:"rgba(0,0,0,0.4)",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:"100px",
    },
    headingSize:{
        fontSize:25,
        fontWeight:700,
        color:"white",
    },
    regitrationView:{
        backgroundColor:"rgba(0,0,0,0.4)",
        height:200,
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center",
    },
    txtinput:{
        fontSize:25,
        borderTopWidth:"none",
        borderTopWidth:"none",
        borderLeftWidth:"none",
        borderBottomColor:"lightblue",
        height:30,
        width:"100%",
        color:"white",
    },
    footerView:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    }
})