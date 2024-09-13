import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ListaProdutos from "./Components/Adaptadores/ListaProdutos";
import axios from "axios";
import CadastroProduto from "./Components/Adaptadores/CadastroProduto";


export default function Index() {
  let [contador, setContador]=useState(0);
  let [produtos, setProdutos]=useState([]);
  
  useEffect(()=> {
      carregaProduto();
  }, [])
//array vazio faz ele carregar uma vez


  function carregaProduto(){
    axios.get('https://api-docker-2t8m.onrender.com/api/produtos')
      .then((resp)=>{
        setProdutos(resp.data);
      })
  }
  
  return (
    <View
      style={estilo.container}
    >
 
    <ListaProdutos produtos={produtos}></ListaProdutos>

    <Button title={`Clicado ${contador}`} onPress={clicarBotao}></Button>
 
    <CadastroProduto/>

    </View>
  );
  function clicarBotao(){
    setContador(contador+1);
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
 
  titulo:{
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
