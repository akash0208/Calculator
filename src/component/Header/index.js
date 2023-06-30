import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SHADE1 } from "../../utils/colors";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/menu.png")} style={styles.icon} />
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: SHADE1,
  },
});
