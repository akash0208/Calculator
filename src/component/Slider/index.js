import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Slide from "@react-native-community/slider";
import { SHADE1, WHITE } from "../../utils/colors";
import { numberWithCommas, undoCommas } from "../../utils/helper";

export default function Slider({ min, max, title, mid, comma, getValues }) {
  const sliderRef = useRef();

  const [sliderValue, setSliderValue] = useState(mid);

  useEffect(() => {
    getValues(title, mid);
  }, []);

  const updateValue = (value, slider) => {
    let decimal = slider ? 1 : 2;
    if (comma) {
      setSliderValue(numberWithCommas(value).toString());
    } else {
      setSliderValue(parseFloat(value).toFixed(decimal).toString());
    }
    getValues(title, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{title}</Text>
      <View style={styles.amountLimit}>
        <Text style={styles.limitText}>{numberWithCommas(min)}</Text>
        <Text style={styles.limitText}>{numberWithCommas(max)}</Text>
      </View>
      <Slide
        ref={sliderRef}
        onValueChange={(value) => updateValue(value, true)}
        value={undoCommas(sliderValue)}
        style={styles.slider}
        minimumValue={parseInt(min)}
        maximumValue={parseInt(max)}
        minimumTrackTintColor={SHADE1}
        maximumTrackTintColor={WHITE}
      />
      <TextInput
        style={styles.input}
        value={sliderValue}
        onChangeText={setSliderValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
  },
  inputTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: SHADE1,
    fontWeight: "700",
  },
  amountLimit: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  limitText: {
    color: WHITE,
    fontWeight: "600",
  },
  input: {
    color: WHITE,
    alignSelf: "center",
    fontSize: 20,
  },
  slider: {
    width: "100%",
    height: 40,
    marginVertical: 6,
  },
});
