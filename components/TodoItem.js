import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>
        {item.length == 0 ? "No items to show !!!" : item.text}
      </Text>
      <Button
        onPress={() => pressHandler(item.key)}
        title="Delete"
        color="#ff5e62"
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 10,
    marginRight: 2,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    fontSize: 17,
  },
});
