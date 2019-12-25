import axios from '../custom-axios/axios'
import qs from 'qs'


const PizzasService = {
    fetchPizzas: ()=> {
        return axios.get("/pizzas");
    },
    fetchIngredients: ()=> {
       return axios.get('/ingredients', {
            params: {
                pagenum: 0,
                size:20
            }
        });
    },
    fetchExactIngredient: (ingr)=> {
        return axios.get("/pizzas/"+ingr+"/details");
    },
    getPizzasByIngredient:(ingredient)=>{
        return axios.get(`ingredients/${ingredient}/pizzas`);
    },
    addIngredient: (ingr) => {
        const data = {
            ...ingr
        }

        const formParams = qs.stringify(data);
        console.log(data);
        return axios.post("/ingredients", data,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    },
    updateIngredient : (ingrNew, ingrOld) => {
        const data = {
            ...ingrNew,
        }
        console.log("INGREDIENT:");
        console.log(ingrNew);
        return axios.patch("/ingredients/"+ingrOld,data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getSpicyIngredients : () => {
        const data = {
            spicy:true
        };
        return axios.get("/ingredients/spicy?spicy=true", {

        });
    },
    deleteIngredient: (ingrID) => {
        return axios.delete(`/ingredients/${ingrID}`);
    },
    searchConsultationTerm: (searchTerm) => {
        return axios.get(`/pizzas?term=${searchTerm}`);
    }
}

export default PizzasService;
