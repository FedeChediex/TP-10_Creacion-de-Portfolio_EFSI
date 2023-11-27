import { useState, createContext } from 'react';

import { useEffect } from 'react';
import axios from 'axios';



// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState([{}]);
	const [filteredProjects, setFilteredProjects] = useState([{}]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
            try {
                const res = await axios.get('/projects.json');
                setProjects(res.data);
				setFilteredProjects(res.data);
				
            } catch (error) {
                console.error('Error fetching data:', error);
            }
			finally {
				setIsLoading(false);
			}
        }

        fetchData();
	},[])

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				filteredProjects,
				setFilteredProjects,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};

		