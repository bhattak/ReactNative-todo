import React from "react";
import { StyleSheet, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";

export default function App({}) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
});
