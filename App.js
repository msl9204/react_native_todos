import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <TodoList />
            <TodoInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
