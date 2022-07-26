import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Footer from "./Footer";
import Header from "./Header";

export default function Details({ route }) {
  const { item } = route.params;
  console.log(item);
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image source={{ uri: `${item.image}` }} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.parag}>{item.body}</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    textAlign: "center",
    fontSize:25,
    fontWeight:'700',
    color:'#262861'
  },
  parag:{
    marginLeft:10,
    marginRight:10,
    paddingBottom:20,
    textAlign:'center',
    fontSize:20,
    color:'green'
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});
