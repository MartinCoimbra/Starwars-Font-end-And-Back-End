import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personas: [],
			planets: [],
			fav: [{ name: "" }]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(resp => setStore({ personas: resp.results }))
					.catch(error => console.log(true));
				/* Traemos a los planetas */
				fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(resp => setStore({ planets: resp.results }))
					.catch(error => console.log(true));
			},

			/* Modificamos osea agregamos */
			setFav: elementoNuevo => {
				setStore({ fav: elementoNuevo });
			},
			/* Borramos elemento */
			setBorrarIDElement: idelement => {
				const store = getStore();
				let newArray = [];
				store.fav.filter(function(element, i) {
					if (i !== idelement) {
						newArray.push(element);
					}
				});
				setStore({ fav: newArray });
			},

			/* Ejemplo */
			changeColor: (index, color) => {
				const store = getStore();
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
