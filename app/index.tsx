import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.text}>Hello World</Text>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e2e2"
  },
  text:{
    color:"#232323",
    fontFamily:"comic-sans",
    fontSize: 50
  }
});
