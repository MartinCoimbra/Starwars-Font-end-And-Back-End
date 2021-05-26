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
			planetBiog: [],
			posicionimg: 0,
			loginData: {},
			logeado: false,
			imgPersonas: [
				{
					url:
						"https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2021/02/luke-retorno-de-jedi-lista-cortada_widelg.jpg?resize=678%2C381&ssl=1"
				},
				{
					url:
						"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ojos-rojos-c3po-star-wars-1566913065.jpg"
				},
				{
					url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/r2-d2.jpg"
				},
				{
					url:
						"https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?,fit=2048%2C1365&ssl=1"
				},
				{ url: "https://wallpapercave.com/wp/wp3210147.jpg" },
				{
					url:
						"https://cdn.lanetaneta.com/wp-content/uploads/2020/07/Star-Wars-Por-que-Owen-Lars-no-reconocio-a-C-3PO-780x470.jpg"
				},
				{
					url:
						"http://1.bp.blogspot.com/_wIW55V-xC00/Sy_eNc3mGfI/AAAAAAAACts/xXvuorug67g/s280/beru+joven+2.jpg"
				},
				{
					url:
						"https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235"
				},
				{ url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780" },
				{
					url:
						"https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/08/hipertextual-se-confirma-serie-obi-wan-kenobi-con-ewan-mcgregor-disney-2019892534-scaled.jpg?fit=2560%2C1707&ssl=1"
				}
			],
			imgPlanetas: [
				{ url: "https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg" },
				{
					url:
						"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960"
				},
				{ url: "https://wallpapercave.com/wp/wp8343626.jpg" },
				{ url: "https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg" },
				{
					url:
						"https://cdna.artstation.com/p/assets/images/images/001/600/036/large/frederic-bec-dagobah-mangrove-tree-rhyzophora-3d-star-wars-c4d-max-obj-3ds-image-3.jpg?1449247099"
				},
				{ url: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg" },
				{
					url:
						"https://media.contentapi.ea.com/content/dam/walrus/common/swbf2-grid-tile-exploring-endor-16x9.jpg.adapt.crop191x100.628p.jpg"
				},
				{ url: "https://i.pinimg.com/originals/37/ec/a8/37eca882093f8fb17c9d03cbe28dbbdd.jpg" },
				{ url: "https://i.pinimg.com/originals/5d/d7/12/5dd7125a673297c84b88fc526d5b515e.jpg" },
				{ url: "https://pm1.narvii.com/6594/9a9044c1ef56788efcbe4b4015043a306b49ece6_hq.jpg" }
			]
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
			login: () => {
				const dataEnviar = getStore().loginData;
				fetch("https://3001-magenta-alpaca-svm6cni0.ws-us07.gitpod.io/login", {
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
						if (resp.token) {
							setStore({ logeado: true });
						}
					})
					.catch(error => console.log(true));
			},
			loginData: e => {
				let dataCapt = { [e.target.name]: e.target.value };
				setStore({ loginData: { ...getStore().loginData, ...dataCapt } });
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
				setStore({ posicionimg: numPos });
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
