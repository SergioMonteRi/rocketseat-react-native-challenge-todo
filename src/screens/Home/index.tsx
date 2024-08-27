import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";

import uuid from "react-native-uuid";
import AntDesign from '@expo/vector-icons/AntDesign';

import { homeStyles } from "./styles";

import { TaskType } from "./types";

import TaskCard from "../../components/TaskCard";
import TasksInfo from "../../components/TasksInfo";

import { logo, no_task } from "../../consts/images";

const Home = () => {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const doneTasks = taskList.filter((task) => task.isDone).length;

  const handleAddTask = (description: string) => {
    if (!description) {
      return Alert.alert(
        "Atenção",
        "Por favor, preencha o campo de descrição da tarefa."
      );
    }

    if (
      taskList.some(
        (task) => task.description.toLowerCase() === description.toLowerCase()
      )
    ) {
      return Alert.alert("Atenção", "Já existe uma tarefa com essa descrição.");
    }

    const task: TaskType = {
      id: uuid.v4(),
      description: description,
      isDone: false,
    };

    setTaskList([...taskList, task]);
    setTaskDescription("");
  };

  const deleteTask = (id: string | number[]) => {
    setTaskList(taskList.filter((task) => task.id !== id));
    Alert.alert("Sucesso", "Tarefa excluída com sucesso!");
  };

  const handleDeleteTask = (id: string | number[]) => {
    Alert.alert("Atenção", "Você deseja realmente excluir esta tarefa?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => deleteTask(id),
      },
    ]);
  };

  const handleToggleTask = (id: string | number[]) => {
    setTaskList((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );

      return updatedTasks.sort((a, b) => Number(a.isDone) - Number(b.isDone));
    });
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image source={logo} style={homeStyles.logo} resizeMode="contain" />
      </View>

      <View style={homeStyles.contentContainer}>
        <View style={homeStyles.formContainer}>
          <TextInput
            style={homeStyles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => handleAddTask(taskDescription)}
          >
          <AntDesign name="pluscircleo" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={homeStyles.tasksInfoContainer}>
          <TasksInfo
            description="Criadas"
            number={taskList.length}
            color="#1E6F9F"
          />
          <TasksInfo description="Concluídas" number={doneTasks} color="#8284FA" />
        </View>

        <FlatList
          data={taskList}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={homeStyles.taskCardContainer}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onDelete={handleDeleteTask}
              handleToggleTask={handleToggleTask}
            />
          )}
          ListEmptyComponent={() => (
            <View style={homeStyles.noTasksContainer}>
              <Image
                style={homeStyles.noTasksImage}
                source={no_task}
                resizeMode="contain"
              />
              <View>
                <Text style={homeStyles.noTasksText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={homeStyles.noTasksText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
