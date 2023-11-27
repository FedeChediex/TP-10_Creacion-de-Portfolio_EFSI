import { useEffect } from 'react';
const useThemeSwitcher = () => {
	

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.add('dark');
		
	}, []);

	return [];
};

export default useThemeSwitcher;
