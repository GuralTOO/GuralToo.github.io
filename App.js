import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  PanResponder,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const LandingPage = () => {
  const [leftWidth, setLeftWidth] = useState(width / 2);
  const [rightWidth, setRightWidth] = useState(width / 2);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx } = gestureState;
      const newLeftWidth = leftWidth + dx;
      const newRightWidth = rightWidth - dx;
      if (newLeftWidth >= 0 && newRightWidth >= 0) {
        setLeftWidth(newLeftWidth);
        setRightWidth(newRightWidth);
      }
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[styles.section, styles.left, { width: leftWidth }]}
        {...panResponder.panHandlers}
      >
        <Image source={require("./assets/ph1.jpg")} style={styles.image} />
        <Text style={styles.sectionTitle}>About My Passions</Text>
        <Text style={styles.sectionText}>
          Write a brief paragraph about your passions and interests here.
        </Text>
      </View>
      <View style={styles.separator} />
      <View
        style={[styles.section, styles.right, { width: rightWidth }]}
        {...panResponder.panHandlers}
      >
        <Text style={[styles.sectionTitle, { color: "#fff" }]}>
          About My Professional Experience
        </Text>
        <Text style={[styles.sectionText, { color: "#fff" }]}>
          Write a brief paragraph about your professional experience here.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
  },
  section: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    backgroundColor: "#ffdf7f",
  },
  right: {
    backgroundColor: "#1a3b58",
  },
  image: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 16,
    textAlign: "center",
  },
  separator: {
    width: 10,
    backgroundColor: "#333",
  },
});

export default LandingPage;
