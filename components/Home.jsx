import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Body from './Body';

export default function Home ({navigation}){
    
    return(
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Body navigation={navigation}/>
      <Footer navigation={navigation}/>
    </View>
    );
};


const styles = StyleSheet.create({
    container:{
      
    }
  });