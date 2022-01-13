import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Conversor from './src/Conversor';
import style from './src/styles/style';
import api from './src/services/api';

// https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=187412e747a0d3ceec4f

export default class appConversorMoedas extends Component {
 render(){
  return (
   <View style ={style.container}>
     <Conversor moedaA ="USD" moedaB ="BRL"/>
   </View>
   );
 }
}