import { StyleSheet, Text, View , Image, TouchableHighlight, TouchableOpacity } from 'react-native';



export default function Card (props){

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity>
                <Image source={{uri:`${props.img}`}} style={styles.Image}/>
                </TouchableOpacity>
            </View>
            <View style={styles.TextView}>
                <TouchableHighlight>
                <Text style={styles.Title}>{props.title}</Text>
                </TouchableHighlight>
                <Text>{props.parag}</Text>
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container:{
        margin:15,
        backgroundColor:'white',
        height:225,
        borderWidth:2,
        borderColor:'grey',
        flexDirection:'row',
        borderRadius:15,
        alignContent:'center'
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        // backgroundColor:'yellow'
    },
    Image:{
        width:100,
        height:190,
        borderRadius:15, 
        // aspectRatio:1,
        margin:10
    },
    TextView:{
        width:240,
        marginTop:20,
        marginBottom:15,
        paddingRight:5,
        paddingLeft:20,
        // backgroundColor:'red',
        borderRadius:15
    },
    Title:{
        fontSize:15,
        fontWeight:'700',

    },
});