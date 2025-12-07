import { Main, Form, Wrapper } from "./styles";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { DishItem } from "../../components/DishItem";
import { TextArea } from "../../components/TextArea";
import { FileInput } from "../../components/FileInput";
import { FormControl } from "../../components/FormControl";

import { FiUpload, FiArrowLeft, FiChevronDown, FiPlus } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useRestaurant } from "../../hooks/restaurant";

export function NewDish() {
    const [name, setName] = useState("")
    const [categorySelected, setCategorySelected] = useState("")

    const [categories, setCategories] = useState([])

    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [, setDishImage] = useState(null)
    const [dishImageFile, setDishImageFile] = useState(null)

    const [newCategory, setNewCategory] = useState("")

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const { restaurant } = useRestaurant()

    const navigate = useNavigate()

    function handleDishImage(event) {
        const file = event.target.files[0]
        const fileUrl = `${api.defaults.baseURL}/files/${file.name}`

        setDishImageFile(file)
        setDishImage(fileUrl)
    }

    function handleNewIngredient() {
        if (newIngredient === '') {
            return alert("O ingrediente não pode ser vazio!")
        }
        setIngredients((prevIngredients => [...prevIngredients, newIngredient.trim()]))
        setNewIngredient("")
    }

    function handleDeleteIngredient(deleted) {
        setIngredients(prevIngredients => prevIngredients.filter(prev => prev !== deleted))
    }

    function handleBack() {
        navigate(-1)
    }

    async function handleNewDish() {

        try {
            const newDish = {
                name,
                category: categorySelected,
                price,
                description,
                ingredients,
                restaurant,
            }

            const { data } = await api.post('/dishes', newDish)

            if (dishImageFile) {
                const formData = new FormData()
                formData.append('image', dishImageFile)
                await api.patch(`/dishes/image/${data._id}`, formData)
            }

            alert("Prato salvo com sucesso!")
            navigate('/')
        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message)
                navigate('/')
            } else {
                alert("Não foi possível salvar o prato!")
            }
        }

    }

    async function handleModalCategory() {
        setModalIsOpen(true)
    }

    async function handleNewCategory() {
        try {
            await api.post('/categories', { name: newCategory })
            alert("Categoria salva com sucesso!")
            setModalIsOpen(false)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível salvar a categoria!")
            }
        }
    }

    useEffect(() => {
        async function fetchCategory() {
            try {
                const categories = await api.get('/categories')
                setCategories(categories.data)
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível carregar as categorias!")
                }
            }
        }
        fetchCategory()
    }, [modalIsOpen])

    return (
        <Main>
            <Modal isOpen={modalIsOpen} title="Nova Categoria" onClose={() => setModalIsOpen(false)}>
                <FormControl label="Nome da Categoria">
                    <Input
                        type="text"
                        placeholder="Ex.: Refeição"
                        className="gray"
                        onChange={e => setNewCategory(e.target.value)}
                    />
                </FormControl>

                <Button title="Salvar categoria" onClick={handleNewCategory} />
            </Modal>
            <button onClick={handleBack}><FiArrowLeft /> voltar</button>
            <Form>
                <h1>Novo prato</h1>

                <FormControl label="Imagem do Prato" className="col-3">
                    <FileInput
                        id="dish-image"
                        icon={<FiUpload />}
                        title={dishImageFile ? dishImageFile.name : "Selecione uma imagem"}
                        onChange={handleDishImage}
                    />
                </FormControl>

                <FormControl label="Nome" className="col-5">
                    <Input
                        type="text"
                        placeholder="Ex.: Salada Ceasar"
                        className="gray"
                        onChange={e => setName(e.target.value)}
                    />
                </FormControl>

                <FormControl label="Categoria" className="col-4">
                    <div className="category">

                        <Select
                            icon={FiChevronDown}
                            name="category"
                            id="category"
                            onChange={e => setCategorySelected(e.target.value)}
                        >
                            <option value="">Selecionar</option>
                            {
                                categories &&
                                categories.map(category => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))
                            }
                        </Select>
                        <button id="new-category" type="button" onClick={handleModalCategory}><FiPlus /></button>
                    </div>
                </FormControl>

                <FormControl label="Ingredientes" className="col-9">
                    <Wrapper>
                        {
                            ingredients.map((ingredient, index) => (
                                <DishItem
                                    key={index}
                                    value={ingredient}
                                    onClick={() => handleDeleteIngredient(ingredient)}
                                />
                            ))
                        }

                        <DishItem
                            placeholder="Adicionar"
                            isNew
                            value={newIngredient}
                            onChange={e => setNewIngredient(e.target.value)}
                            onClick={handleNewIngredient}
                        />
                    </Wrapper>
                </FormControl>

                <FormControl label="Preço" className="col-3">
                    <Input
                        className="gray"
                        placeholder="R$ 00,00"
                        type="number"
                        onChange={e => setPrice(e.target.value)}

                    />
                </FormControl>

                <FormControl label="Descrição" className="col-12">
                    <TextArea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                    />
                </FormControl>

                <div className="actions col-12">
                    <Button title="Salvar alterações" className="tomato-400 col-11-13" onClick={handleNewDish} />
                </div>
            </Form>
        </Main>
    )
}
