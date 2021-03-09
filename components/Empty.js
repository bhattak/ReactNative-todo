import React from "react";
import {StyleSheet, Text, View } from "react-native";

export default function TodoItem({ item }) {
  return (
    <View>
      <Text style={styles.item}>{item}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    marginRight: 5,
    fontSize: 20,
  },
});
