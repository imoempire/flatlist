import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Flatlist, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const App = () => {
  const list = [
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
    {
      name: "Ann Neal",
      num: "402-467-4633",
      Img: require("./assets/logo.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Flatlist
        data={list}
        keyExtractor={(item, index)}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={{ width: 20, height: 20 }} source={item.Img} />
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text>{item.name}</Text>
                <Text>{item.num}</Text>
              </View>
              <View style={styles.icons}>
                <Feather
                  style={{ marginRight: 10 }}
                  name="phone"
                  size={24}
                  color="#569FD4"
                />
                <MaterialCommunityIcons
                  style={{ marginRight: 10 }}
                  name="message-processing"
                  size={24}
                  color="#569FD4"
                />
                <Feather
                  style={{ marginRight: 10 }}
                  name="more-vertical"
                  size={24}
                  color="#569FD4"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  icons: {
    flexDirection: "row",
    left: 100,
  },
});

export default App;
