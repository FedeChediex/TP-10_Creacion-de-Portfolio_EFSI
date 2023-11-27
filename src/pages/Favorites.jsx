
import { FavoritesProvider } from '../context/FavoritesContext';
import Favorites from '../components/favorites/Favorites';
import { ProjectsProvider } from '../context/ProjectsContext';

const Contact = () => {
    return (
        <div className="container mx-auto">
            <FavoritesProvider>
                <ProjectsProvider>
                    <Favorites />
                </ProjectsProvider>
            </FavoritesProvider>
        </div>
    );
};

export default Contact;
