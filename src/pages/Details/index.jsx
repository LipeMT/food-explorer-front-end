import {  Main, Description, DishDetails, Ingredients, Ingredient, Order } from "./styles";

import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { FiArrowLeft } from "react-icons/fi";
import { PiNewspaperClippingBold } from "react-icons/pi";

import { Quantity } from "../../components/Quantity"
import { Button } from "../../components/Button"

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Details() {

    const [dish, setDish] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`)
                setDish(response.data)
            }
            catch (error) {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível carregar o prato')
                }
            }
        }
        fetchDish()
    }, [])

    const { user } = useAuth()

    return (
        <Main>
            <button onClick={handleBack}><FiArrowLeft /> voltar</button>
            <Description>
                <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="" />
                <DishDetails>
                    <section>
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                    </section>
                    {
                        dish.ingredients &&
                        <Ingredients>
                            {dish.ingredients.map(ingredient => <Ingredient key={ingredient}>{ingredient}</Ingredient>)}
                        </Ingredients>
                    }
                    {
                        user.role !== 'admin' &&
                        <Order>
                            <Quantity />
                            <Button icon={PiNewspaperClippingBold} title={`pedir . R$ ${dish.price}`} />
                        </Order>
                    }
                </DishDetails>
                {
                    user.role === 'admin' &&
                    <Button title="Editar Prato" onClick={() => navigate(`/edit/${dish.id}`)}></Button>
                }
            </Description>
        </Main>
    )
}