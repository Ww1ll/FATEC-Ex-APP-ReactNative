import { Text, View, Image, Button, Alert } from "react-native";
import Style from "@/app/Styles/Default";
import Produto from "@/app/Models/Produto";
import React from "react";
import axios from "axios";

interface PropProd {
    produto:Produto,
}

function Excluir(id: number) {
    let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
    axios.delete(`${api}/${id}`) 
    .then((resp)=>{
        Alert.alert('Produto excluido com sucesso');
        alert('Produto excluido com sucesso');
    })
}

const ItemProduto:React.FC<PropProd> = ({produto}) => {
    return (
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>{produto.preco}</Text>   
            <Image source={{uri: produto.foto}} style={Style.Image}/>   
            <Button title="Excluir" 
            onPress={()=>{Excluir(produto.id)}}/>  
        </View>
    )
}

export default ItemProduto;