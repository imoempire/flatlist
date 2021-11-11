import React from "react";
import {
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const App = () => {
  const imageUrl =
    "data:image/jpeg;base64,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";
  const imageUrl2 =
    "https://th.bing.com/th/id/OIP.DMOUWpymUM_KKCO1jEaaMgHaGK?w=228&h=190&c=7&r=0&o=5&pid=1.7";
  const imageUrl3 =
    "https://th.bing.com/th/id/OIP.gvaogti0S416s0ZtvmRHmgHaLH?w=131&h=196&c=7&r=0&o=5&pid=1.7";
  const imageUrl4 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Brendan_Eich.png/220px-Brendan_Eich.png";
  
  const imageUrl5 = "https://th.bing.com/th/id/R.8b67d1064dc6b182de524fd187b0331f?rik=4TxmY5s0l1LAbA&pid=ImgRaw&r=0" 
  
    const list = [
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: { uri: imageUrl },
    },
    {
      name: "Eva Bergman",
      num: "234-098-4567",
      Img: require("./assets/logo.jpg"),
    },
    {
      name: "Lisa Oneil",
      num: "234-198-4567",
      Img: { uri: imageUrl4 },
    },
    {
      name: "Jeffrey Bowless",
      num: "234-453-4567",
      Img: require("./assets/logo.jpg"),
    },
    {
      name: "Wanda Granger",
      num: "234-387-4567",
      Img: {uri: imageUrl5},
    },
    {
      name: "John Hyde",
      num: "234-474-4567",
      Img: require("./assets/logo.jpg"),
    },
    {
      name: "Debbie Hyde",
      num: "234-838-4567",
      Img: { uri: imageUrl3 },
    },
    {
      name: "James Hyde",
      num: "234-124-4567",
      Img: require("./assets/logo.jpg"),
    },
    {
      name: "Sam Mane",
      num: "234-287-4567",
      Img: require("./assets/logo.jpg"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image
                style={{ width: 60, height: 60, borderRadius: 30, right: 5 }}
                source={item.Img}
              />
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.name}
                </Text>
                <Text>{item.num}</Text>
              </View>
              <View style={styles.icons}>
                <Feather
                  style={{ marginRight: 20 }}
                  name="phone"
                  size={24}
                  color="#569FD4"
                />
                <MaterialCommunityIcons
                  style={{ marginRight: 20 }}
                  name="message-processing"
                  size={24}
                  color="#569FD4"
                />
                <Feather
                  style={{ marginRight: 10 }}
                  name="more-vertical"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },

  icons: {
    flex: 1,
    flexDirection: "row",
    left: 30,
  },

  title: {
    fontSize: 25,
  },
  num: {
    fontSize: 15,
  },
});

export default App;
