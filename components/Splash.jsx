import React, { useRef, useEffect } from 'react';
import { Animated, Text, View , StyleSheet, Easing , ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Splash({navigation}){

    const animationValue = useRef(new Animated.Value(0)).current;

    function navigateHome(){
        setTimeout(()=>{
           navigation.navigate('Home')
        },2000)
    }
   

    useEffect(()=>{
        Animated.loop(
            Animated.timing(animationValue , {toValue:1 , easing:Easing.linear , duration:4000 ,useNativeDriver:true}),
            
        ).start();
    },[])

    const spin = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

      

    
    return(
        <Animated.View style={styles.container}>
            <Animated.Image source={require('../assets/mercedes-benz-logo.png')}  style={[{transform: [{rotate: spin}]}]}/>
            <Text style={styles.text}>Mercedes-Benz</Text>
            {navigateHome()}
        </Animated.View>
        
    )
    

};



    const styles = StyleSheet.create({
        container:{
            width:'100%',
            height:'100%',
            backgroundColor:'#262861',
            justifyContent:'center',
            alignItems:'center',
            
        },
        Square:{
            width:130,
            height:130,
            backgroundColor:'orange',
            borderRadius:15,
        },
        text:{
            color:'white',
            fontSize:35,
            marginTop:15,
        }

    });

    


{/* <Animated.View style={[styles.Square , {transform: [{rotate:spin}]}  ]}>
            </Animated.View> */}