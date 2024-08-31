import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto"
import Produto from "@/app/Models/Produto";

interface PropListaProd{
    produtos: Produto[];
}

const ListaProdutos:React.FC<PropListaProd> = ({ produtos }) => {


    return (

        <ScrollView>
            <View>

            {produtos.map((p) =>
                <ItemProduto produto={p} key={p.id}>

                </ItemProduto>
            )}
            </View>
        </ScrollView>
    )
}

export default ListaProdutos;