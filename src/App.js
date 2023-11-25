import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import  useThemeSwitcher  from './hooks/useThemeSwitcher';


const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectDetails.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
						<Routes>
							<Route path="/" element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/details"
								element={<ProjectSingle />}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							</Route>
						</Routes>					
				</Router>
				<UseScrollToTop />
			</div>
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

