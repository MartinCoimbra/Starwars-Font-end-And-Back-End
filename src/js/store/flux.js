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
			infoProfile: {},
			datapostcard: {},
			postPlanetOPerson: { tipo: "Person" }
		},
		actions: {
			loadDataPersonsYPlanets: () => {
				/* Las personas */
				console.log("entrandoooos");

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
			loadDataFavs: fav => {
				fetch(process.env.BACKEND_URL + "/user/favoritos", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (fav === true) {
							/* limpiar favoritos*/
							setStore({ favoritos: [] });
						}
						resp.favoritosPlanets.map((element, i) => {
							setStore({
								favoritos: [
									...getStore().favoritos,
									{ id: element.postplanets.id, name: element.postplanets.name, tipo: "planet" }
								]
							});
						});
						resp.favoritosPersons.map((element, i) => {
							setStore({
								favoritos: [
									...getStore().favoritos,
									{ id: element.postpersons.id, name: element.postpersons.name, tipo: "person" }
								]
							});
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
			/* posicion */
			posicionFlux: numPos => {
				setStore({ posicion: numPos });
			},
			/* Agregamos personas */
			setFavPerson: numPost => {
				++numPost;
				fetch(process.env.BACKEND_URL + "/user/favoritos/person/" + numPost, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().loadDataFavs(true);
						console.log(resp); /* if(resp=="ACCESS DENIED") */
					})
					.catch(error => console.log(error));
			},
			serFavPlanet: numPost => {
				++numPost;
				fetch(process.env.BACKEND_URL + "/user/favoritos/planet/" + numPost, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						console.log(resp.id); /* if(resp=="ACCESS DENIED") */
						getActions().loadDataFavs(true);
					})
					.catch(error => console.log(error));
			},
			/* Borramos elemento (lo usamos en el nav bar) */
			setBorrarIDElement: (idelement, tipo) => {
				/* con tipo identificamos que tipo es si planet o person */
				let tipoAux;
				tipo === "planet" ? (tipoAux = "planet") : (tipoAux = "person");
				console.log(tipo);
				fetch(process.env.BACKEND_URL + "/user/favoritos/" + tipoAux + "/" + idelement, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: localStorage.getItem("token")
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().loadDataFavs(true);
						console.log(resp); /* if(resp=="ACCESS DENIED") */
					})
					.catch(error => console.log(error));
			},
			/* Log out */
			actionRemove: () => {
				localStorage.removeItem("token");
				setStore({ logeado: false });
				setStore({ infoProfile: {} });
				setStore({ favoritos: [] });
			},
			/* Verificar si hay publicaciones para no estar publicando 1 * 1 */
			verificarSihayPlanetOPerson: () => {
				/* Si los personajes estan vacios, publicalos */
				if (getStore().personas2.length === 0) {
					fetch(process.env.BACKEND_URL + "/planet", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
							/* Authorization: localStorage.getItem("token") */
						},
						body: JSON.stringify({
							name: "Tatooine",
							descripcion:
								"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wi",
							climate: "arid",
							population: "200000",
							orbital_period: "304",
							rotation_period: "23",
							diameter: "10465",
							foto: "https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
						})
					})
						.then(resp => resp.json())
						.then(resp => console.log("ENTREEEE"))
						.catch(error => console.log(error));
				}
				/* Si los planetas estan vacios, publicalos */
				if (getStore().planets2.length === 0) {
					console.log(getStore().planets2);
				}
			},
			PostearCard: () => {
				let tipo;
				if (getStore().postPlanetOPerson.tipo == "Planet") {
					tipo = "/planet";
				} else {
					tipo = "/person";
				}
				fetch(process.env.BACKEND_URL + tipo, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(getStore().datapostcard)
				})
					.then(resp => resp.json())
					.then(resp => {
						getActions().loadDataPersonsYPlanets();
						console.log(resp);
					})
					.catch(error => console.log(error));
			},
			verMas: numID => {
				numID += 1;
				setStore({ cambio: true });
			},
			/* Planetas */
			verMas2: numID => {
				numID += 1;
				setStore({ cambio: false });
			},
			AddPostCard: e => {
				let dataPostCard = { [e.target.name]: e.target.value };
				setStore({ datapostcard: { ...getStore().datapostcard, ...dataPostCard } });
			},
			TipoPlanetOperson: planetOperson => {
				/* getActions().login(); */
				setStore({ postPlanetOPerson: { tipo: planetOperson } });
			}
		}
	};
};

export default getState;
