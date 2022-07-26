import { Linking, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header ({navigation}){
    function handlePress(){
        Linking.canOpenURL("https://google.com").then(supported =>{
            if(!supported){
                alert('Not Supported')
            }
            else{
                return Linking.openURL("https://google.com")
            }
        }).catch(err=>alert(err));
    }

    
    return(
        <View style={styles.headerContainer}>
            <View style={{flexDirection:'row' , alignItems:'center'}}>
                <TouchableHighlight>
                    <Icon name='home' size={30} color='white'></Icon>
                </TouchableHighlight>
                <Text style={{fontSize:20 , color:'white' , marginLeft:17}}>Car Brands</Text>
            </View>
            <TouchableHighlight onPress={handlePress}>
                <Icon name='google' size={30} color='white'></Icon>
            </TouchableHighlight>    
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer:{
        marginTop:35,
      width:'100%',
      height:60,
      backgroundColor:'#262861',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:20,
      paddingRight:20,
    },
  });