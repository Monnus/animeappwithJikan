import React,{useState}from 'react'
import {TextInput,ImageBackground,SafeAreaView,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

function LoginPage({navigation}) {
 const [email,setEmail]=useState("");
 const [password,setpassword]=useState("");
 const id=2;
  function handlelogin(id){
    const auth=getAuth();
    if(id===2){
      signInWithEmailAndPassword(auth,email,password)
      .then((response=>{
        setEmail("");
        setpassword("");
        navigation.navigate('Home'),
        console.log(response);

      })).catch((err)=>{
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
   <ImageBackground source={require("../images/loginbgPage.png")} style={styles.image}>
<View style={styles.overlay}>
<View style={styles.headingView}><Text style={styles.headingSize}><Text style={{color:"#38b6ff",fontWeight:"700",}}>Ani</Text>Read</Text></View>

<View style={styles.regitrationView}>
<TextInput placeholder='Email'
 placeholderTextColor="white"  style={styles.txtinput} onChangeText={(e)=>setEmail(e)} />

<TextInput placeholder='Password'
placeholderTextColor="white" 
style={[styles.txtinput,{borderTopColor:"red"}]}
onChangeText={(e)=>setpassword(e)}
/>

</View>
<TouchableOpacity style={{
    borderRadius: 5,alignSelf:"center",
    width:150,height:50,
    paddingLeft:"7%",
    paddingTop:"1%",
    backgroundColor:"rgba(17, 112, 236,0.4)",
    marginTop:"50px"}}>
    <Text style={[styles.txtinput]} onPress={()=>handlelogin(id)}>Submite</Text>
    </TouchableOpacity>
 
<View style={styles.footerView}>
<Text style={{color:'white'}}>If you don't have account <Text style={{color:"lightblue"}} onPress={()=>navigation.navigate("registation")}>registation in here</Text></Text>

</View>


</View>

   </ImageBackground>
  </SafeAreaView>
  )
}

export default LoginPage

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
  backgroundColor:"rgba(0,0,0,0.8)"},
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