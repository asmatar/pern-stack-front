import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import ResataurantList from '../components/ResataurantList'

const Home = () => {
    return (
        <div>
            <Header />
            <AddRestaurant /> 
            <ResataurantList />
        </div>
    )
}

export default Home
