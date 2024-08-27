import { StyleSheet } from "react-native";

export const taskCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#262626",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    columnGap: 8,
    borderRadius: 8,
  },
  check: {
    width: 17,
    height: 17,
  },
  trash: {
    width: 17,
    height: 17,
  },
  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 16,
  }
});
