import React, { Component } from "react";
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import style from "./styles";
//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=187412e747a0d3ceec4f
class Conversor extends Component {
constructor (props) {
super(props);
this.state ={
    moedaA: props.moedaA,
    moedaB: props.moedaB,
    moedaB_valor:0,
    valorConvertido:0
}
this.converter =this.converter.bind(this);
}

converter(){
const response = api.get('convert?q=USD_BRL&compact=ultra&apiKey=187412e747a0d3ceec4f')
}

    render() {
        const {moedaA,moedaB} = this.props;
        return (
            <View style ={style.container} >
                <Text style = {style.titulo}> {this.props.moedaA} para {moedaB}</Text>

                <TextInput
                placeholder="Valor a ser convertido"
                style ={style.areaInput}
                onChangeText={(moedaB_valor) =>this.setState({moedaB_valor})}
                keyboardType="numeric"
                />

                <TouchableOpacity 
                style = {style.botaoArea}
                onPress={this.converter}
                >
                    <Text style = {style.botaoTexto}> Converter </Text>
                </TouchableOpacity>

                <Text style = {style.valorConvertido} >
                  {this.state.valorConvertido} 
                </Text>
                
            </View>

        )
    }
}

export default Conversor;