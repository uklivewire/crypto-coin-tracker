import axios from 'axios';
import { create } from 'zustand';

const showStore = create((set) => ({
    graphData: [],
    data: null,
    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=gbp&days=121`),
            
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`),  
        ]);

        
        const graphData = graphRes.data.prices.map(price => {
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString('en-us')

            return {
                    Date: date,
                    Price: p,
            };
        });

        // set({data: dataRes.data}); must be added for the image and coin id to render on the show page. 
        // Must include data: null at the begining of the function asweel underneath graphData: [],
        set({data: dataRes.data});

        set({graphData})
    }
}));

export default showStore;