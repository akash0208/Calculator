import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EmiList(props) {
  const { monthlyList, interestList, balanceList } = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header1}>
          <Text style={styles.text}>Month</Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.text}>Principal</Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.text}>Interest</Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.text}>Total Payment</Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.text}>Balance</Text>
        </View>
      </View>
      {monthlyList.map((item, index) => {
        return (
          <View style={styles.header}>
            <View style={styles.header1}>
              <Text style={styles.text}>{index + 1}</Text>
            </View>
            <View style={styles.header2}>
              <Text style={styles.text}>₹{item}</Text>
            </View>
            <View style={styles.header2}>
              <Text style={styles.text}>₹{interestList[index]}</Text>
            </View>
            <View style={styles.header2}>
              <Text style={styles.text}>₹{item + interestList[index]}</Text>
            </View>
            <View style={styles.header2}>
              <Text style={styles.text}>₹{balanceList[index]}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header1: {
    width: "12%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header2: {
    width: "22%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
