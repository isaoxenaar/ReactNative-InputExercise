import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [outputText, setOutputText] = useState("BOTTENPOP");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => {
        goal.id !== goalId;
      });
    });
  };

  const cancelAdditionGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() => setIsAddMode(true)} />
      <View>
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelAdditionGoalHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
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
