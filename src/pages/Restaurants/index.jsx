import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Main, RestaurantsList } from "./styles";

import { RestaurantCard } from './components/RestaurantCard'
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { useRestaurant } from '../../hooks/restaurant'
import { useNavigate } from "react-router-dom";

export function Restaurants() {

  const [restaurants, setRestaurants] = useState([])
  const [search, setSearch] = useState('')

  const filteredRestaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()))

  const { selectRestaurant } = useRestaurant()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantsResponse = await api.get('/restaurants')
        setRestaurants(restaurantsResponse.data)

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao buscar restaurantes')
        }
      }
    }
    fetchData()
  }, [])

  async function handleSelectRestaurant(restaurant_id) {
    const accessed = await selectRestaurant(restaurant_id)
    console.log(accessed)
    if (accessed) navigate('/')
  }

  return (
    <Main>
      <Input
        placeholder="Busque pelo restaurante"
        icon={FiSearch}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <RestaurantsList>
        {
          restaurants && restaurants.length > 0 &&
          filteredRestaurants.map(restaurant =>
            <RestaurantCard
              key={restaurant._id}
              name={restaurant.name}
              cnpj={restaurant.cnpj}
              onClick={() => handleSelectRestaurant(restaurant._id)}
            />)
        }
      </RestaurantsList>

    </Main>
  )
}