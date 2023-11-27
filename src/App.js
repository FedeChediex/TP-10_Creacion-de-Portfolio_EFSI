import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import  useThemeSwitcher  from './hooks/useThemeSwitcher';
import { FavoritesProvider } from './context/FavoritesContext.jsx';



const About = lazy(() => import('./pages/AboutMe'));

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectDetails.jsx'));
const Favorites = lazy(() => import('./pages/Favorites'));


function App() {
	return (
		<AnimatePresence>
			<FavoritesProvider>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
						<Routes>
							<Route path="/" element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							
							<Route
								path="/projects/details"
								element={<ProjectSingle />}
							/>
							<Route path="about" element={<About />} />
							<Route path="favorites" element={<Favorites />} />
							</Route>
						</Routes>					
				</Router>
				<UseScrollToTop />
			</div>
			</FavoritesProvider>
		</AnimatePresence>
	);
}

function Layout() {
	useThemeSwitcher();
	return (
		<>
			<AppHeader />
			<Suspense fallback={"Cargando..."}>
			
			<Outlet/>
			
			</Suspense>
			<AppFooter />
		</>
	);
}
export default App;

