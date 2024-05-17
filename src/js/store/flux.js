import { sync } from "remote-origin-url";

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
			characters:[{}],
			species: [{}],
			vehicles: [{}],
			planets: [{}],
			currentUser: null,

		},
		actions: {
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
			},
			getUsersSW: async () =>{
				const response = await fetch ('https://www.swapi.tech/api/people/');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				setStore({characters: data.results})
			},
			getSpecies: async () => {
				const response = await fetch ('https://www.swapi.tech/api/species');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data)
				setStore({species: data.results})
			}, 
			getVehicles: async () => {
				const response = await fetch ('https://www.swapi.tech/api/vehicles');
				if (!response.ok){
					console.log ('Error');
					return
				}
				const data = await response.json();
				setStore({vehicles: data.results})
			},
			getPlanets: async () => {
				const response = await fetch ('https://www.swapi.tech/api/planets');
				if (!response.ok){
					console.log('Error');
					return
				}
				const data = await response.json();
				setStore({planets: data.results})
			},
			settingUser: (user) => {setStore({currentUser: user})},
			settingCurrentUser: (text) => {setStore ({currentUserLink: text})},
			
		}
	};
};

export default getState;
