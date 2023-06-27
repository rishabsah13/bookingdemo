import { Image, StyleSheet, Text, View,ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Detail = () => {
    const navigation = useNavigation()
  return (
 
    <ScrollView style={{flex:1}}>
        <>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Image source={require("../assets/detailpic.png")} style={{width:"100%",borderBottomLeftRadius:20,borderBottomRightRadius:20}}/>
    </TouchableOpacity>
    <View>
<Text style={{margin:10,fontSize:20,color:"black",fontWeight:"bold"}}>About Us</Text>
<Text style={{margin:10,fontSize:15,}}>Welcome to resort paradise we ensure the best service during your stay in bali with an emphasis on customer comfort. Enjoy Balinese specialties, dance and music every Saturday for free at competitive prices. You can enjoy all the facilities at our resort</Text>
<Text  style={{margin:10,fontSize:20,color:"black",fontWeight:"bold"}}>Services & Facilities</Text>
<View>
<View style={{flexDirection:"row",justifyContent:"space-between",padding:15,flexWrap:"wrap"}}>
<Image source={require("../assets/tick.png")}/>
<Text>Swimming pool</Text>
<Image source={require("../assets/tick.png")}/>
<Text>Swimming pool</Text>

</View>
</View>

    </View>
    </>
    <View style={{width:"100%",height:65,backgroundColor:"white",marginBottom:10,borderColor:"gray",borderWidth:0.5}}>
<View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
    <View>
        <Text style={{fontSize:14,fontWeight:"400"}}>Price estimate</Text>
        <Text style={{fontSize:20,fontWeight:"700",color:"black"}}>$480/night</Text>

    </View>
    <TouchableOpacity style={{justifyContent:"center",alignSelf:"center",color:"white",alignItems:"center",width:139,height:45,backgroundColor:"#2C67FF",borderRadius:15}}>

<Text style={{color:"white",fontWeight:"bold"}}>Reserve Now</Text>
    </TouchableOpacity>


</View>

    </View>
    </ScrollView>
 
  )
}

export default Detail

const styles = StyleSheet.create({})