import { FiSearch } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";

const selectOptions = [
	'All Projects',
	'Web Application',
	'Mobile Application',
];

const ProjectsFilter = ({ projects }) => {
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('All Projects');

	const { setFilteredProjects, } = useContext(ProjectsContext);

	


	useEffect(() => {
		const filterProjects = () => {
			let result = [...projects];
	
			// Filtrar por título
			if (searchProject) {
				result = result.filter((item) => {
					return item.title.toLowerCase().includes(searchProject.toLowerCase());
				});
			}
	
			// Filtrar por categoría
			if (selectProject !== 'All Projects') {
				result = result.filter((item) => {
					return item.category.toLowerCase() === selectProject.toLowerCase();
				});
			}
	
			result[0] ? setFilteredProjects(result) : setFilteredProjects([{
	
				title: "Not Found",
				category: "",
				image: "https://pbs.twimg.com/media/Fef11ikWAAAn039.jpg"
			}]);
		};
		filterProjects();
	}, [searchProject, selectProject, projects]);

	return (
		<>
			<div className="flex justify-between gap-2">
				<span
					className="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
				>
					<FiSearch className="text-ternary-light w-5 h-5"></FiSearch>
				</span>
				<input
					onChange={(e) => {
						setSearchProject(e.target.value);

					}}
					className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
					id="name"
					name="name"
					type="search"
					required=""
					placeholder="Search Projects"
					aria-label="Name"
				/>
			</div>
			<select
				onChange={(e) => {
					setSelectProject(e.target.value);
				}}
				className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
			>

				{/* Modificar Filtros*/}


				{selectOptions.map((option, index) => (
					<option className="text-normal sm:text-md" key={index} id={option}>
						{option}
					</option>
				))}
			</select>
		</>

	);
};

export default ProjectsFilter;


