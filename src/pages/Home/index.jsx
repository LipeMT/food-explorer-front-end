import { Container, Main, Intro } from "./styles";

import { api } from "../../services/api";

import ingredients from "../../assets/ingredients.png";
import ingredientsDesktop from "../../assets/ingredients-desktop.png";

import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";
import { FormControl } from "../../components/FormControl";
import { SliderSection } from "../../components/SliderSection";
import { DishCard } from '../../components/DishCard';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [imageLogo, setImageLogo] = useState(window.innerWidth < 1024 ? ingredients : ingredientsDesktop);
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const navigate = useNavigate();

    function handleEditDish(dish_id) {
        navigate(`/edit/${dish_id}`);
    }

    async function handleUpdateCategory() {
        try {
            await api.put(`/categories/${categoryId}`, { name: categoryName })

            alert("Categoria salva com sucesso!")
            setModalIsOpen(false)
            setCategoryName("")
            setCategoryId("")


        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível salvar a categoria!")
            }
        }
    }

    async function handleDeleteCategory() {
        try {
            confirm(
                `Você tem certeza que deseja excluir a categoria?
                Obs.: Todos os pratos vinculados a ela também serão excluídos`
            )
            await api.delete(`/categories/${categoryId}`)

            alert("Categoria deletada com sucesso!")
            setModalIsOpen(false)
            setCategoryName("")
            setCategoryId("")


        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível salvar a categoria!")
            }
        }
    }

    function handleOpenModal(category_id, category_name) {
        setCategoryId(category_id);
        setCategoryName(category_name);
        setModalIsOpen(true);
    }

    useEffect(() => {
        const handleResize = () => {
            setImageLogo(window.innerWidth < 768 ? ingredients : ingredientsDesktop);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        console.log("Entrou aqui")
        async function fetchData() {
            const [categoriesResponse, dishesResponse] = await Promise.all([
                api.get('/categories'),
                api.get('/dishes')
            ]);

            setCategories(categoriesResponse.data);
            setDishes(dishesResponse.data);
        }

        fetchData();
    }, [categoryId]);

    const filteredDishes = dishes.filter(dish => {
        const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase()) ||
            dish.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(search.toLowerCase()));

        return matchesSearch;
    });

    const dishesByCategory = categories.map(category => ({
        ...category,
        dishes: filteredDishes.filter(dish => dish.category_id === category.id)
    }));

    return (
        <Container>
            <Header onOpenMenu={() => setMenuIsOpen(true)} role="customer" onChange={(e) => setSearch(e.target.value)} />
            <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} onChange={(e) => setSearch(e.target.value)} />
            <Modal isOpen={modalIsOpen} title="Editar Categoria" onClose={() => setModalIsOpen(false)}>

                <FormControl label="Nome da Categoria">
                    <Input
                        type="text"
                        placeholder="Ex.: Refeição"
                        className="gray"
                        value={categoryName}
                        onChange={e => setCategoryName(e.target.value)}
                    />
                </FormControl>

                <Button title="Salvar" onClick={handleUpdateCategory} />
                <Button title="Excluir" className="gray" onClick={handleDeleteCategory} />

            </Modal>
            <Main>
                <Intro>
                    <img src={imageLogo} alt="Ingredientes" />
                    <section>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </section>
                </Intro>
                {dishesByCategory.map(category => {

                    if (category.dishes.length === 0) {
                        return
                    }

                    return (
                        <SliderSection key={category.id} title={category.name} onClick={() => handleOpenModal(category.id, category.name)}>
                            {category.dishes.map(dish => (
                                <DishCard
                                    editButtonAction={() => handleEditDish(dish.id)}
                                    key={dish.id}
                                    image={`${api.defaults.baseURL}/files/${dish.image}`}
                                    title={`${dish.name} >`}
                                    price={dish.price}
                                    id={dish.id}
                                    description={dish.description}
                                />
                            ))}
                        </SliderSection>
                    )
                })}
            </Main>
            <Footer />
        </Container>
    );
}