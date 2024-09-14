import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Components/Adaptadores/ListaProdutos";
import axios from "axios";
import { useRouter, useFocusEffect } from "expo-router";



export default function Index() {
  const router = useRouter();

  useFocusEffect(() => {
    carregaProduto();
  })

  let [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregaProduto();
  }, [])
  //array vazio faz ele carregar uma vez


  function carregaProduto() {
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp) => {
        setProdutos(resp.data);
      })
  }

  return (
    <View
      style={estilo.container}
    >

      <ListaProdutos produtos={produtos} aoAtualizar={carregaProduto}></ListaProdutos>

      <Button title='Cadastrar' onPress={() => { telaCadastro() }}></Button>

    </View>
  );
  function telaCadastro() {
    router.push('/Components/Telas/cadastro');
  }

}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#4295f5",
    padding: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 20,


  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",

  },

  titulo: {
    color: "black",
    fontSize: 30,
    fontFamily: "sanserifa",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  }

});
