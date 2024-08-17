import { Text, View, StyleSheet } from "react-native";

const produtos = [
  {id: 1, nome: "manguaça", preco: 5.75},
  {id: 2, nome: "coca", preco: 5.75},
  {id: 3, nome: "guarana", preco: 5.75},
  {id: 4, nome: "fanta", preco: 5.75},
  {id: 5, nome: "leite", preco: 5.75},
]


export default function Index() {
  return (
    <View
      style={estilo.container}
    >
      {
        produtos.map((produto) =>(
         <View>
          <Text style={estilo.text}>{produto.id}</Text>
          <Text style={estilo.text}>{produto.nome}</Text>
          <Text style={estilo.text}>{produto.preco}</Text>
         </View> 
        ))
      }
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "green",

  },
  text: {
    color: "white",
    fontSize: 35,
    fontFamily: "roboto",

  }

});
