import axios from 'axios';
import { create } from 'zustand';

const homeStore = create((set) => ({
    coins: [],
    qyery: '',

    setQuery: (e) => {
        set({query: e.target.value})
        homeStore.getState().searchCoins()
    },

    searchCoins: async () => {
        const {query} = homeStore.getState()
        const res = await axios.get('https://api.coingecko.com/api/v3/search?query=${query}')
        console.log(res)
    },

    fetchCoins: async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    
    const coins = res.data.coins.map(coin => {
        return {
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          priceBtc: coin.item.price_btc

        }
    })
    
    set({coins})
  }
}))

export default homeStore;