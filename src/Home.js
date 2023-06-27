import { View, Text, ImageBackground ,ScrollView,Image,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Home = () => {
    const navigation= useNavigation()
  return (
    <ScrollView style={{flex:1}}>
      <ImageBackground source={require("../assets/beach.jpg")
} style={{width:395,height:265}}>
<View style={{flexDirection:"row",marginTop:100,justifyContent:"space-between",padding:15}}>
<View>
    <Text style={{color:"white",fontSize:16,fontWeight:"400"}}>
    Current Location

    </Text>
    <Text style={{color:"white",fontSize:20,fontWeight:"700"}}>Labuan Bajo,INA</Text>
    </View>
    <Image source={require("../assets/bell.png")}/>
</View>
<View style={styles.searchSection}>
<TextInput
        style={styles.input}
        placeholder="Look for homestay"
    />
    <Image style={styles.searchIcon} source={require("../assets/search.png")}/>
   
</View>




      </ImageBackground>

      <View style={{borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:"white"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",margin:20}}>

  <Text style={{color:"black",fontWeight:"600",fontSize:22}}>Hotels Near You </Text>
  <Text style={{color:"blue",fontWeight:"500",fontSize:18}}>View All</Text>
        </View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
    <Image source={require("../assets/villa1.png")} style={{margin:15}}/>
    </TouchableOpacity>
    <Image source={require("../assets/villa2.png")} style={{margin:15}}/>
    <Image source={require("../assets/villa3.png")} style={{margin:15}}/>

    </ScrollView>
    <View style={{flexDirection:"row",justifyContent:"space-between",margin:20}}>

<Text style={{color:"black",fontWeight:"600",fontSize:22}}>Explore Place </Text>
<Text style={{color:"blue",fontWeight:"500",fontSize:18}}>View All</Text>
      </View>

      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <Image source={require("../assets/Bali.png")} style={{margin:15}}/>
    <Image source={require("../assets/labu.png")} style={{margin:15}}/>
    <Image source={require("../assets/lomb.png")} style={{margin:15}}/>

    </ScrollView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    searchSection: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin:10,
        borderRadius:25,
        padding:10,
        
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingRight: 10,
     
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})