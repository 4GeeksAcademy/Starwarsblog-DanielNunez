import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			personaje: {},
			planetas: [],
			planeta: {},
			favoritos: [],
		},
		actions: {
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({
						personajes: data.results
					})
				} catch (error) {
					console.log(error)
				}

			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({
						planetas: data.results
					})
				} catch (error) {
					console.log(error)
				}

			},

			personajeIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						personaje: data
					})
				} catch (error) {
					console.log(error)
				}

			},

			planetaIndividual: async (id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/" + id)
					const data = await response.json()
					console.log(data)
					setStore({
						planeta: data
					})
				} catch (error) {
					console.log(error)
				}

			},

			favoritos: (item) => {
				const store = getStore()
				if (
					store.favoritos.includes(item)
				) {
					let auxiliar = []
					auxiliar = store.favoritos.filter((element) => element !== item)
					setStore({ favoritos: auxiliar })
				}
				else {
					setStore({ favoritos: [...store.favoritos, item] })
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
