import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <Image source={require("../assets/pic1.jpg")} style={{position:"absolute",left:85,top:42}}/>
        <Image source={require("../assets/pic2.png")} style={{position:"absolute",left:207,top:87}}/>
        <Image source={require("../assets/pic3.jpg")} style={{position:"absolute",top:124}}/>
        <Image source={require("../assets/pic4.png")} style={{position:"absolute",top:168,left:124}}/>

        <Image source={require("../assets/pic5.png")} style={{position:"absolute",top:251,left:38}}/>

        <Image source={require("../assets/pic6.png")} style={{position:"absolute",top:299,left:160}}/>

        <Image source={require("../assets/pic7.png")} style={{position:"absolute",top:218,left:239}}/>

      </View>
<View style={{alignItems:"center",justifyContent:"center",marginTop:70,padding:10}}>
      <Text style={{justifyContent:"center",alignItems:"center",alignSelf:"center",fontSize:28,color:"#323232",fontWeight:"600",}}>Let’s Find Your Sweet & Dream Place</Text>
      <Text style={{justifyContent:"center",alignItems:"center",alignSelf:"center",fontSize:14,color:"#323232",fontWeight:"400",marginTop:10,marginLeft:5}}>Get the opportunity to stay that you dream of at an affordable price</Text>

      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{width:51,height:7,borderRadius:10,backgroundColor:"#2C67FF",marginTop:8,left:-50}}> 

        </View>

<View style={{width:9,height:7,borderRadius:10,backgroundColor:"#D9D9D9",marginLeft:-20,marginTop:10}}>

</View>
<View style={{width:9,height:7,borderRadius:10,backgroundColor:"#D9D9D9",marginLeft:15,marginTop:10}}>

</View>

      </View>

      <View style={{marginTop:30}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.btn}>
            <Text style={{color:"white",fontWeight:"500",fontSize:18}}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    mainbox:{
      width:375,
     height: 392,
     marginTop:-120     
    },
    btn:{
        width:343,
        height:45,
        backgroundColor:"#2C67FF",
        justifyContent:"center",
        alignItems:"center"
    }
})
export default Onboarding