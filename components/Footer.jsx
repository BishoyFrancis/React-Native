import { StyleSheet, Text, TouchableHighlight, View , Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer ({navigation}){
    function handleWhatsAppPress(){
        Linking.canOpenURL("whatsapp://send?text=hello&phone=01202290397").then(supported=>{
            if(!supported){
                alert("Not Suported")
            }
            else{
                return Linking.openURL("whatsapp://send?text=test&phone=+2001275635022")
            }
        }).catch(err=>{alert(err)});
    }
    return(
        <View style={styles.container}>
            <TouchableHighlight onPress={()=>{navigation.navigate('About')}}>
            <Icon name='info' size={30} color='white'></Icon>
            </TouchableHighlight>
            <TouchableHighlight onPress={handleWhatsAppPress}>
            <Icon name='whatsapp' size={30} color='white'></Icon>
            </TouchableHighlight>
            <Icon name='home' size={30} color='white'></Icon>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        position:'absolute',
        top:750,
        backgroundColor:'#262861',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:25,
        paddingRight:25,
    }
})