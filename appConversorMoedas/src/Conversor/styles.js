import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'

    },

    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },

    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 15
    },

    botaoTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'center',
        textAlign: 'center',

    },
    valorConvertido: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15
    }




})