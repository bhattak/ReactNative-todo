import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TodoItem from "./TodoItem";
import Empty from "./Empty";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const submitHandler = (text) => {
    if (text != "") {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random() }, ...prevTodos];
      });
    }
    console.log("Clearing text field !!!", text);
    setText("");
    console.log("Cleared !!!", text);
  };
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add todo here ..."
        value={text}
        onChangeText={(text) => setText(text)}
        clearButtonMode="always"
      />
      <Button onPress={() => submitHandler(text)} title="Add" color="#4e4376" />

      {!todos.length ? (
        <Empty item={"Your todo list is EMPTY !!!"} />
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
