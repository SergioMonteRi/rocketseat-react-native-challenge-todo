import React from "react";
import { View, Text } from "react-native";

import { TasksInfoProps } from "./types";

import { tasksInfoStyles } from "./styles";

const TasksInfo = (props: TasksInfoProps) => {
  const { description, number, color } = props;

  const styles = tasksInfoStyles(color);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
};

export default TasksInfo;
