import { Container, Main, Form, Wrapper } from "./styles";

import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { DishItem } from "../../components/DishItem";
import { TextArea } from "../../components/TextArea";
import { SideMenu } from "../../components/SideMenu";
import { FileInput } from "../../components/FileInput";
import { FormControl } from "../../components/FormControl";

import { FiUpload, FiArrowLeft, FiChevronDown, FiPlus } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

export function EditDish() {

    const [dish, setDish] = useState({})
    const params = useParams()

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [name, setName] = useState("")

    const [category, setCategory] = useState("")

    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState("")

    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    const [dishImageFile, setDishImageFile] = useState("")
    const [dishImage, setDishImage] = useState("")

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const navigate = useNavigate()

    function handleDishImage(event) {
        const file = event.target.files[0]
        setDishImageFile(file)

        setDishImage(file.name)
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

    async function handleUpdate() {
        try {
            const updated = {
                name,
                category,
                price,
                description,
                ingredients,
            }
            await api.put(`/dishes/${dish._id}`, updated)

            if (dishImageFile) {
                const formData = new FormData()
                formData.append('image', dishImageFile)
                await api.patch(`/dishes/image/${dish._id}`, formData)
            }

            alert("Prato salvo com sucesso!")
            navigate('/')
        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível editar o prato!")
            }
        }

    }

    async function handleDelete() {
        try {
            await api.delete(`/dishes/${dish._id}`)
            alert("Prato excluído com sucesso!")
            navigate('/')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível excluir o prato!")
            }
        }
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

    async function handleModalCategory() {
        setModalIsOpen(true)
    }

    useEffect(() => {
        async function fetchDish() {
            try {
                const response = await api.get(`/dishes/${params.id}`)

                setDish(response.data)
                setName(response.data.name)
                setCategory(response.data.category);
                setPrice(response.data.price);
                setDescription(response.data.description);
                setIngredients(response.data.ingredients || []);
                setDishImage(response.data.image);
            }
            catch (error) {
                if (error.response) {
                    return alert(error.response.data.message)
                } else {
                    alert("Não foi possível carregar o prato!")
                }
            }
        }

        async function fetchCategory() {
            const categories = await api.get('/categories')
            setCategories(categories.data)
        }

        fetchCategory()
        fetchDish()

    }, [modalIsOpen])

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
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
            <Main>
                <button onClick={handleBack}><FiArrowLeft /> voltar</button>
                <Form>
                    <h1>Editar prato</h1>

                    <FormControl label="Imagem do Prato" className="col-3">
                        <FileInput
                            id="dish-image"
                            icon={<FiUpload />}
                            title={dishImage ? dishImage : "Selecionar imagem para alterá-la"}
                            onChange={handleDishImage}
                        />
                    </FormControl>

                    <FormControl label="Nome" className="col-5">
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ex.: Salada Ceasar"
                            className="gray"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </FormControl>

                    <FormControl label="Categoria" className="col-4">
                        <div className="category">

                            <Select
                                icon={FiChevronDown}
                                name="category"
                                id="category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="">Selecionar</option>
                                {
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
                            value={price}
                            onChange={e => setPrice(e.target.value)}

                        />
                    </FormControl>

                    <FormControl label="Descrição" className="col-12">
                        <TextArea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            defaultValue={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <div className="actions">

                        <Button title="Excluir Prato" className="gray" id="delete" onClick={handleDelete} />
                        <Button title="Salvar alterações" className="tomato-400" id="save" onClick={handleUpdate} />
                    </div>
                </Form>
            </Main>

            <Footer />
        </Container>
    )
}
