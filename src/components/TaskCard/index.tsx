import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { TaskCardProps } from "./types";
import { taskCardStyles } from "./styles";
import { check, trash, uncheck } from "../../consts/images";

const TaskCard = (props: TaskCardProps) => {
  const { task, onDelete, handleToggleTask } = props;

  return (
    <View style={taskCardStyles.container}>
      <TouchableOpacity onPress={() => handleToggleTask(task.id)}>
        <Image
          source={task.isDone ? check : uncheck}
          style={taskCardStyles.check}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={taskCardStyles.text}>{task.description}</Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Image source={trash} style={taskCardStyles.trash} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
