import { StyleSheet } from "react-native"

const Style = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    card: {
        flex: 1,
        width: 325,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: 2 }, // Para iOS
        shadowOpacity: 0.1, // Para iOS
        shadowRadius: 4, // Para iOS
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: "1%"
    },
    cardText: {
        fontSize: 18,
        color: '#333',
    },
    Image: {
        width:100,
        height:100,
        objectFit:"contain",
        resizeMode:"contain",
    }
});

export default Style;