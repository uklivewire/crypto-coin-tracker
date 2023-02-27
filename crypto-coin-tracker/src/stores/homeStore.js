import axios from 'axios';
import { create } from 'zustand';
import debounce from '../helpers/debounce';

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: " ",

  setQuery: (e) => {
    set ({query: e.target.value})
    homeStore.getState().searchCoins()
  },

  // function to search coins
  searchCoins: debounce ( async () => {
    const {query, trending} = homeStore.getState()

    if (query.length > 2) {
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
    
    const coins = res.data.coins.map(coin => {
      return {
        name: coin.name,
        image: coin.large,
        id: coin.id
      }
    })

    set ({coins});
  } else {
      set({coins: trending});
  }

  }, 500),
  
  
  // function to fetch the list of trending coins from the coin gecko api
  fetchCoins: async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    
    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc
      }
    })
    
    set({coins, trending: coins})
  }
}));

export default homeStore;

// import axios from 'axios';
// import { create } from 'zustand';
// import debounce from '../helpers/debounce';

// const homeStore = create((set) => ({
//     coins: [],
//     qyery: '',

//     setQuery: (e) => {
//         set({query: e.target.value})
//         homeStore.getState().searchCoins()
//     },

//     searchCoins: debounce( async () => {
//         const {query} = homeStore.getState()
//         const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
//         console.log(res)
//     }, 500),

//     fetchCoins: async () => {
//     const res = await axios.get(`https://api.coingecko.com/api/v3/search/trending`)
    
//     const coins = res.data.coins.map(coin => {
//         return {
//           name: coin.item.name,
//           image: coin.item.large,
//           id: coin.item.id,
//           priceBtc: coin.item.price_btc

//         }
//     })
    
//     set({coins})
//   }
// }))

// export default homeStore;