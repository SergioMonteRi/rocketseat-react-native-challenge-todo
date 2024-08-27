import { StyleSheet } from "react-native";

export const tasksInfoStyles = (color: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      columnGap: 8,
    },
    description: {
      color,
      fontWeight: "bold",
    },
    numberContainer: {
      backgroundColor: "#333333",
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 32,
    },
    number: {
      color: "#D9D9D9",
      fontSize: 12,
    },
  });
};
