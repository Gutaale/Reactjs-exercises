import {createBrowserRouter} from 'react-router'
import App from './App'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Categories from './pages/Categories'
import RecipeDetails from './pages/RecipeDetails'
import CategoryDetails from './pages/CategoryDetails'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'recipes',
                element:<Recipes />
            },
            {
                path:'recipe/:recipe_id',
                element:<RecipeDetails />
            },
            {
                path:'categories',
                element:<Categories />
            },
            {
                path:'categories/:category_id',
                element:<Categories />
            }
        ]
    }

])

export default router