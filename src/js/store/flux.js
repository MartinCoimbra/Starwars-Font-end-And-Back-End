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
			personas2: [],
			planets: [],
			planets2: [],
			fav: [{ name: "" }],
			personaBiog: [],
			cambio: true,
			planetBiog: [],
			posicion: 0,
			loginData: {},
			signupData: {},
			logeado: false,
			infoProfile: {}
		},
		actions: {
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
			loadDataPersonsYPlanets: () => {
				/* Las personas */
				fetch(process.env.BACKEND_URL + "/persons")
					.then(resp => resp.json())
					.then(resp => {
						/* console.log(resp[0].name); */
						setStore({ personas2: resp });
					})
					.catch(error => console.log(true));
				/* Los planetas */
				fetch(process.env.BACKEND_URL + "/planets")
					.then(resp => resp.json())
					.then(resp => {
						/* console.log(resp[0].name); */
						setStore({ planets2: resp });
					})
					.catch(error => console.log(true));
			},
			login: () => {
				const dataEnviar = getStore().loginData;
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
						/* Authorization : myToken */
					},
					body: JSON.stringify(dataEnviar) //Convertimos la data a JSON
				})
					.then(resp => resp.json())
					.then(resp => {
						/* Guardamos el token en el localStorage */
						localStorage.setItem("token", resp.token);
						if (resp.token !== undefined) {
							setStore({ logeado: true });
							setStore({ infoProfile: resp.user });
						}
					})
					.catch(error => console.log(true));
			},
			loginData: e => {
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...dataCapt } });
			},
			/* POST REGISTRO */
			signupData: e => {
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ signupData: { ...getStore().signupData, ...dataCapt } });
				/* setStore({ loginData: { ...getStore().loginData, ...emailypass } }); */
			},
			signup: () => {
				let emailypass = { email: getStore().signupData.email, password: getStore().signupData.password };
				setStore({ loginData: emailypass });
				const dataEnviar = getStore().signupData;
				fetch(process.env.BACKEND_URL + "/user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(dataEnviar)
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log("entre" + resp), getActions().login();
					})
					.catch(error => console.log(error));
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
			/* Modificamos direccion de la imagen */
			posicionFlux: numPos => {
				setStore({ posicion: numPos });
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
