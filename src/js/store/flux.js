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
			personas2: [],
			planets2: [],
			fav: [{ name: "" }],
			favoritos: [],
			cambio: true,
			planetBiog: [],
			posicion: 0,
			loginData: {},
			signupData: {},
			logeado: false,
			infoProfile: {}
		},
		actions: {
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
			loadDataFavs: () => {
				fetch(process.env.BACKEND_URL + "/user/favoritos", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						resp.favoritosPlanets.map((element, i) => {
							setStore({ favoritos: [...getStore().favoritos, { name: element.postplanets.name }] });
						});
						resp.favoritosPersons.map((element, i) => {
							setStore({ favoritos: [...getStore().favoritos, { name: element.postpersons.name }] });
						});
						console.log(getStore().favoritos);
					})
					.catch(error => console.log(error));
			},
			login: () => {
				const dataEnviar = getStore().loginData;
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
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
							getActions().loadDataFavs();
						}
					})
					.catch(error => console.log(error));
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
			}
		}
	};
};

export default getState;
