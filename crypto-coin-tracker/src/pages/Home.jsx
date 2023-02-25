import React from 'react';
import homeStore from '../stores/homeStore';

export default function Home() {
    const store = homeStore()

    React.useEffect(() => {
       store.fetchCoins() 
    }, [])
  
    return (
    <div>Home</div>
  )
}
