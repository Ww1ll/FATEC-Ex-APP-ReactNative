import { Text, View, Image } from "react-native";
import Style from "@/app/Styles/Default";
import Produto from "@/app/Models/Produto";
import React from "react";

interface PropProd {
    produto:Produto,
}

const ItemProduto:React.FC<PropProd> = ({produto}) => {
    return (
        <View style={Style.card}>
            <Text style={Style.cardText}>{produto.nome}</Text>
            <Text style={Style.cardText}>{produto.preco}</Text>   
            <Image source={{uri: produto.foto}} style={Style.Image}/>    
        </View>
    )
}

export default ItemProduto;