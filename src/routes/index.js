
import Detail from "../pages/Detail"
import Home from "../pages/Home"

const publicRoutes = [
    {
        path: '/', component: Home
    },
    {
        path: '/:id', component: Detail
    },
]
export default publicRoutes