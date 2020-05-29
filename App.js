import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
    const [data, setData] = React.useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <TodoList
                data={data}
                // onToggle 패턴도 복습하기
                onToggle={(id) => {
                    const newData = data.map((item) => {
                        if (item.id === id) {
                            item.done = !item.done;
                        }
                        return item;
                    });

                    setData(newData);
                }}
            />
            <TodoInput
                // 여기 onSubmit 함수 불러온 패턴 복습하기
                onSubmit={(title) => {
                    setData([
                        {
                            id: title + (data.length + 1),
                            title: title,
                            done: false,
                        },
                        ...data,
                    ]);
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c8d6e5",
        alignItems: "center",
        justifyContent: "center",
        // 안드로이드 notch 아래부터 레이아웃 주기 위한 부분 추가
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
});
