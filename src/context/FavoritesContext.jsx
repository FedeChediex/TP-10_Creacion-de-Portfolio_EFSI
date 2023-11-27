import { useState, createContext, useEffect } from 'react';

// Create projects context
export const FavoritesContext = createContext();

// Create the projects context provider
export const FavoritesProvider = (props) => {
	const [favoritesProjects, setFavoritesProjects] = useState(localStorage.getItem('favoritesProjects') ? JSON.parse(localStorage.getItem('favoritesProjects')) : []);


	useEffect(() => {

		localStorage.setItem('favoritesProjects', JSON.stringify(favoritesProjects))

	}, [favoritesProjects])


	const handleFav = (project) => {
		const isProjectInFavorites = favoritesProjects.some((favProject) => favProject.id === project.id);


		const updatedFavorites = isProjectInFavorites
			? favoritesProjects.filter((favProject) => favProject.id !== project.id) 
			: [...favoritesProjects, project];

		setFavoritesProjects(updatedFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{
				favoritesProjects,
				setFavoritesProjects,
				handleFav,
				
			}}
		>
			{props.children}
		</FavoritesContext.Provider>
	);
};



