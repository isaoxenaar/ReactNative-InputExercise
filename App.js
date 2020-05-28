import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("BOTTENPOP");
  return (
    <View style={styles}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="course goal"
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
        />
        <Button title="ADD" />
      </View>
      <View></View>
      <Text>{outputText}</Text>
      <Button
        title="change text"
        onPress={() => setOutputText("Waar is je sleutelbeen?")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
