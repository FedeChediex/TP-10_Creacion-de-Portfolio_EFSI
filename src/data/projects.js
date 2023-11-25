import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		ProjectHeader: {
			title: 'Buscador de Peliculas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Aprender conocimientos basicos sobre DOM, HTML, CSS, JavaScript',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'DOM',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Buscador de Peliculas',
		category: 'Web Application',
		image: WebImage2,
		url: 'https://github.com/MatiasBurecovics/Tp3-Buscador-de-peliculas.git',
	},
	{
		id: 2,
		ProjectHeader: {
			title: 'Gestor de Citas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Gestor de Citas',
		category: 'Mobile Application',
		image: MobileImage2,
		url: 'https://github.com/MatiasBurecovics/TP4CITAS',

	},
	{
		id: 3,
		ProjectHeader: {
			title: 'TODO List',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'TODO List',
		category: 'Web Application',
		image: UIImage1,
		url: 'https://github.com/MatiasBurecovics/TP-2-TODO-List/tree/main/Tp2_EFSI',
	},
	{
		id: 4,
		ProjectHeader: {
			title: 'Buscador de Peliculas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Receta Torta',
		category: 'Web Application',
		image: UIImage2,
		url: 'https://github.com/MatiasBurecovics/TP-Diagnostico',

	},
	{
		id: 5,
		ProjectHeader: {
			title: 'Buscador de Peliculas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Jugando con Banderas',
		category: 'Web Application',
		image: MobileImage1,
		url: 'https://github.com/MatiasBurecovics/TP6Jugandoconbanderas',
	},
	{
		id: 6,
		ProjectHeader: {
			title: 'Buscador de Peliculas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Directorio de Personas',
		category: 'Web Application',
		image: WebImage1,
		url: 'https://github.com/MatiasBurecovics/TP7_DIRECTORIO',
	},
	{
		id: 7,
		ProjectHeader: {
			title: 'Buscador de Peliculas',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		CompanyInfo:
		{
			
			title: 'Ort',
			details: 'Secundaria',
		},
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies:
		{
			title: 'Tools & Technologies',
			techs: [
				'HTML',
				'CSS',
				'JavaScript',
				'Vue.js',
				'TailwindCSS',
				'AdobeXD',
			],
		},
		details: [
			"El objetivo del TP 6 es hacer un juego.",
			"Utilizaremos la API: https://countriesnow.space/api/v0.1/countries/flag/images, la cual nos devuelve nombres de países y sus banderas.",
			"Por medio de useEffect obtendremos todos los países. Una vez recibida la respuesta, aleatoriamente obtendremos uno y ese será el que el jugador deberá adivinar. Guardaremos la seleccionada en un estado, y el usuario tendrá que ir arriesgando a qué país pertenece la bandera. Cada vez que adivine, suma 10 puntos y cada vez que no adivine, resta 1 punto. Los puntos deberán estar guardados en un estado y mostrados en pantalla.",
			"Opcionales:",
			"1.  Agregar un temporizador (15s) en cada nueva bandera. Si termina antes, los segundos restantes suman puntos.",
			"2.  Poder agregar un nombre e ir llevando los puntos de cada nuevo jugador.",
			"3.  Agregar ayudas, aleatoriamente algunas letras (2s menos cada vez que pide ayuda).",
			"4.  Agregarle estilos y que quede bonito.",
			"Recomendación: usar Github. ¡Que comience el juego!",
		],
		title: 'Catalogo de Productos',
		category: 'Web Application',
		image: WebImage2,
		url: 'https://github.com/MatiasBurecovics/TPCatalogodeProductos',
	},
	{
		id: 8,
		title: 'Not Found',
		category: '',
		image: 'https://pbs.twimg.com/media/Fef11ikWAAAn039.jpg',
		
	}

];