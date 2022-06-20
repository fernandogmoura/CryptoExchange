import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  
  state: {
    chart: 'BTCUSDT',
    numberValueUsd: '',
    numberValue: '',
    coinMain: 'Bitcoin',
    priceMain: '',
    urlsApi: [
    
    'https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
    'https://www.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
    'https://www.binance.com/api/v3/ticker/price?symbol=ADAUSDT',
    'https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT',

    ]
  },
  mutations: {

    cryptoApiPrices(state, index){
      let url = state.urlsApi[index]
      axios.get(url).then((response) => {
        state.priceMain = response.data.price
      })
      
      return state.priceMain 
    },

    setCrypto(state, index){
      switch(index) {
      case 0:
        state.coinMain = 'Bitcoin'
        state.chart = 'BTCUSDT'
        state.numberValueUsd = ''
        state.numberValue = ''
        
        break;
      case 1:
        state.coinMain = 'Ethereum'
        state.chart = 'ETHUSDT'
        state.numberValueUsd = ''
        state.numberValue = ''  
        break;
      case 2:
        state.coinMain = 'Cardano'
        state.chart = 'ADAUSDT'
        state.numberValueUsd = ''
        state.numberValue = ''  
        break;
      case 3:
        state.coinMain = 'Solana'
        state.chart = 'SOLUSDT'
        state.numberValueUsd = ''
        state.numberValue = '' 
      break;
      default:
      }
    },

    calcNumber(state, number){
      switch(state.coinMain) {
      case 'Bitcoin':
        if(number === 0){
          state.numberValue = state.numberValueUsd / state.priceMain
        } else {
          state.numberValueUsd = state.numberValue * state.priceMain
        }  
        break;

      case 'Ethereum':
        if(number === 0){
          state.numberValue = state.numberValueUsd / state.priceMain
        } else {
          state.numberValueUsd = state.numberValue * state.priceMain
        }
        break; 

      case 'Cardano':
        if(number === 0){
          state.numberValue = state.numberValueUsd / state.priceMain
        } else {
          state.numberValueUsd = state.numberValue * state.priceMain
        }
        break;

      case 'Solana':
        if(number === 0){
          state.numberValue = state.numberValueUsd / state.priceMain
        } else {
          state.numberValueUsd = state.numberValue * state.priceMain
        }  
      break;
      }
    }
  },
  actions: {
    setCrypto({ commit }, index){
      commit('cryptoApiPrices', index)
      commit('setCrypto', index)
    }
  },
  modules: {
  }
})
