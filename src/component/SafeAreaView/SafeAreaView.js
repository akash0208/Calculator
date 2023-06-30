import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeAreaView(props) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        style={styles.container(top, bottom)}
      >
        <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets>
          {props.children}
        </ScrollView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: (top, bottom) => ({
    flex: 1,
    paddingTop: top,
    paddingBottom: bottom,
    paddingHorizontal: 20,
  }),
});
