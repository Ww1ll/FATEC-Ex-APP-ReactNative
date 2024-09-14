import { ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto"
import Produto from "@/app/Models/Produto";

interface PropListaProd {
    produtos: Produto[];
    aoAtualizar?: Function;
}

const ListaProdutos: React.FC<PropListaProd> = ({ produtos, aoAtualizar }) => {


    return (

        <ScrollView>
            <View>

                {produtos.map((p) =>
                    <ItemProduto produto={p} key={p.id} aoExcluir={() => { aoAtualizar?.call(null) }}>

                    </ItemProduto>
                )}
            </View>
        </ScrollView>
    )
}

export default ListaProdutos;