import React from "react";
import styled from "styled-components";

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    margin: 5px;
    width: 100%;
`;

const TextInput = styled.TextInput`
    background-color: #fff;
    border: 1px solid black;
    padding: 10px;
`;

export default function TodoInput({ onSubmit }) {
    const [value, setValue] = React.useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <TextInput
                placeholder="Add a new item"
                value={value}
                onChangeText={(v) => setValue(v)}
                onSubmitEditing={() => {
                    onSubmit(value);
                    setValue("");
                }}
            />
        </KeyboardAvoidingView>
    );
}
