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
									{ id: element.postplanets.id, name: element.postplanets.name }
								]
							});
						});
						resp.favoritosPersons.map((element, i) => {
							setStore({
								favoritos: [
									...getStore().favoritos,
									{ id: element.postpersons.id, name: element.postpersons.name }
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
			setBorrarIDElement: idelement => {
				console.log(idelement);
				console.log(idelement);
				console.log(idelement);
				fetch(process.env.BACKEND_URL + "/user/favoritos/person/" + idelement, {
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
			}
		}
	};
};

export default getState;
