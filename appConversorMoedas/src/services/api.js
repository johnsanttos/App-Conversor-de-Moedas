import axios from "axios";
///https://free.currencyconverterapi.com/api/v5/
//convert?q=USD_BRL&compact=ultra&apiKey=187412e747a0d3ceec4f
const api = axios.create ({
    baseURL: '/https://free.currencyconverterapi.com/api/v5'
});

export default api;