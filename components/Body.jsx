import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View , ScrollView, TouchableHighlight, TouchableOpacity , ActivityIndicator , Image} from 'react-native';
import Card from './Card';


export default function Body ({navigation}){

    const [data,setData] = useState([]);
    const [isLoading , setisLoading] = useState(true);

    const URL = 'https://mockend.com/HosamZewain/test/posts';
    
    useEffect(()=>{
        fetch(URL).then(
            (res)=>res.json()).then(json=>{
                setData(json)
                setisLoading(false)
            }).catch((err)=> {throw err})
    },[])


    
    return(
        <ScrollView style={styles.container1}>
                {
                    isLoading ?
                    <View style={styles.Activity}>
                        <ActivityIndicator size="large" color='green'></ActivityIndicator>
                    </View>
                    :
                    
                    data.map((item)=>{
                        return(
                            <TouchableOpacity key={item.id} onPress={()=>{navigation.navigate('Details' , {item})}}>
                                <Card  title = {item.title} img = {item.image} parag = {item.body}/>
                            </TouchableOpacity>
                        )
                    })
                
                }

            {/* <Card title='Tesla, Inc.' parag='Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles.' img={require('../assets/tesla-logo.png')}/>    
            
            <Card title='BMW' parag='Bayerische Motoren Werke AG, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.' img={require('../assets/bmw-logo.png')}/>

            <Card title='Ferrari' parag='Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni.' img={require('../assets/ferrari-logo.png')}/>

            <Card title='Maserati' parag='Maserati S.p.A. is an Italian luxury vehicle manufacturer. Established on 1 December 1914, in Bologna, Italy, the companys headquarters are now in Modena, and its emblem is a trident.' img={require('../assets/maserati-logo.png')}/>

            <Card title='Porsche' parag='Dr.-Ing. h.c. F. Porsche AG, usually shortened to Porsche, is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany.' img={require('../assets/porsche-logo.png')}/>

            <Card title='Lamborghini' parag='Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.' img={require('../assets/lamborghini-logo.png')}/>

            <Card title='Mercedes-Benz' parag='Mercedes-Benz, commonly referred to as Mercedes, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG is headquartered in Stuttgart, Baden-Württemberg, Germany' img={require('../assets/mercedes-benz-logo.png')}/>

            <Card title='Peugeot' parag='Peugeot is a French brand of automobiles owned by Stellantis. The family business that preceded the current Peugeot companies was founded in 1810, On 20 November 1858, Émile Peugeot applied for the lion trademark.' img={require('../assets/peugeot-logo.png')}/>

            <Card title='Volkswagen' parag='Volkswagen AG, known internationally as the Volkswagen Group, is a German multinational automotive manufacturer headquartered in Wolfsburg, Lower Saxony, Germany.' img={require('../assets/volkswagen-logo.png')}/>

            <Card title='Honda' parag='Honda Motor Company, Ltd. is a Japanese public multinational conglomerate manufacturer of automobiles, motorcycles, and power equipment, headquartered in Minato, Tokyo, Japan.' img={require('../assets/honda-logo.png')}/> */}


            <View style={{height:120}}></View>
                    
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
    container1:{
        backgroundColor:'#EFEFEF',
        width:'100%',
        height:'100%'
    },
    Activity:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
    },
})
