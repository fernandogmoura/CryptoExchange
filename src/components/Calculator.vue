<template>
    <v-row
      
      no-gutters
    >
        <v-col
          cols="12"
          sm="4"
          offset-md="1"
          align-self="center"
        >
            <div class="title">
                <p class="text-h1 title-border"
                >Midas <span class="orange--text">Crypto</span> the best choice for you!
                </p>
            </div>

        </v-col>
        <v-spacer></v-spacer>
        <v-col
            cols="12"
            sm="6"
            align-self="center"  
        >
            <v-card
                max-width="374"
                flat
            >
              <div class="price-border">
                <v-card-title>
                  <div>
                    <p class="text-h3 mb-0 font-weight-bold">
                      {{ $store.state.coinMain }}
                    </p>
                    
                  </div>
                </v-card-title>
                <v-card-text>
                  <div>
                    <p class="black--text font-weight-bold subtitle-1">
                      <v-icon class="mb-1" color="orange" large>mdi-currency-usd</v-icon>
                      <span class="text-h5">{{ $store.state.priceMain }}</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-0 text-h5">Differentiated quotes for high trading volume.</p>
                  </div>
                </v-card-text>
              </div>

                <div>                 
                <v-card-title>
                    <p class="text-h5 mt-4">Want to:</p>
                    <v-btn
                      @click="buyButton"
                      color="success"         
                      class="ma-2"
                    >
                        Buy
                    </v-btn>

                    <v-btn
                      @click="sellButton"
                      color="red"
                      dark
                    >
                        Sell 
                    </v-btn>
                </v-card-title>
                </div>

                <div class="px-5">
                    <v-text-field
                      v-model="$store.state.numberValueUsd"
                      @keyup="$store.commit('calcNumber', 0)"
                      class="border-amount mb-5"
                      color="orange"
                      label="Amount in USD"
                      prepend-inner-icon="mdi-currency-usd"
                      type="number"
                      flat
                      hide-details
                      hide-spin-buttons
                      solo
                    ></v-text-field>

                    <v-text-field
                      v-model="$store.state.numberValue"
                      :label="`Amount in ${$store.state.coinMain}`"
                      @keyup="$store.commit('calcNumber', 1)"
                      class="border-amount mb-5"
                      color="orange"
                      type="number"
                      flat
                      hide-details
                      hide-spin-buttons
                      solo
                    ></v-text-field>
                </div>

                <div class="btn-buy-sell text-center">
                    <v-btn
                      color="warning"
                      height="45"
                      width="335"
                    >
                        <h3>{{ buttonTrade }}</h3>
                    </v-btn>
                </div>
            </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          class="pt-2"
        >
        <div 
          class="text-center"
        >
          <v-btn
            v-for="(coin, index) in crypto"
            :key="coin.icon"
            class="mx-1"
            @click="$store.dispatch('setCrypto', index)"
            height="75"
            width="75"
            depressed
            fab
          >
            <v-img
              max-height="75"
              max-width="75"
              :src="coin.img" >
            </v-img> 
          </v-btn>     
        </div>
      </v-col>
  </v-row>
</template>

<script>
export default {
    data: () => ({ 
      buttonTrade: 'Buy',
      crypto: [
        { 
          title: 'Bitcoin', 
          img: 'https://bitcoin.org/img/icons/opengraph.png?1652976465', 
        },
        { 
          title: 'Ethereum', 
          img: 'https://static.okx.com/cdn/assets/imgs/221/5F33E3F751873296.png',  
        },
        { 
          title: 'Cardano', 
          img: 'https://user-images.githubusercontent.com/29678099/108859611-2a656b80-75cc-11eb-965e-2d621212d39c.png', 
        },
        { 
          title: 'Solana', 
          img: 'https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png',  
        },
      ],
    }),
    methods: {
        buyButton() {
            this.buttonTrade = 'Buy'
        },
        sellButton(){
            this.buttonTrade = 'Sell'
         },
    }
}
</script>

<style scoped>

.title-border {
    border-top: solid orange 6px;
    border-bottom: solid orange 6px;
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.btn-buy-sell {
    padding-bottom: 20px;    
}

.price-border {
  border: groove orange 3px;
  border-radius: 24px !important;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.border-amount {
  border: 1px solid rgba(255, 165, 0, .9);
}
</style>