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
			fav: [{ name: "" }],
			personaBiog: [],
			cambio: true,
			planetBiog: []
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
			/* Personas */
			verMas: numID => {
				numID += 1;
				setStore({ cambio: true });

				let linkk = "https://www.swapi.tech/api/people/" + numID;
				fetch(linkk)
					.then(resp => resp.json())
					.then(resp => setStore({ personaBiog: resp.result.properties }))
					.catch(error => console.log(true));
			},
			/* Planetas */
			verMas2: numID => {
				numID += 1;
				setStore({ cambio: false });
				let linkk = "https://www.swapi.tech/api/planets/" + numID;
				fetch(linkk)
					.then(resp => resp.json())
					.then(resp => setStore({ planetBiog: resp.result.properties }))
					.catch(error => console.log(true));
			},
			/* Modificamos osea agregamos (lo usamos en las cards)*/
			setFav: elementoNuevo => {
				setStore({ fav: elementoNuevo });
			},
			/* Borramos elemento (lo usamos en el nav bar) */
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
