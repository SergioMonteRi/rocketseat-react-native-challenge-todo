import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 32,
    marginTop: '5%',
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  formContainer: {
    marginTop: -26,
    flexDirection: "row",
    columnGap: 4,
  },
  input: {
    flex: 1,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    backgroundColor: "#262626",
    minHeight: 52,
    borderRadius: 6,
    padding: 16,
    color: "#FAFAFA",
    fontSize: 16,
  },
  button: {
    width: 52,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 52,
    borderRadius: 6,
  },
  taskCardContainer: {
    rowGap: 8,
    marginTop: 16,
  },
  tasksInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  noTasksContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#333333",
    marginTop: 32,
    paddingVertical: 48,
    paddingHorizontal: 24,
    rowGap: 16,
  },
  noTasksImage: {
    width: 56,
    height: 56,
  },
  noTasksText: {
    color: "#808080",
    textAlign: "center",
    marginTop: 8,
  },
});
