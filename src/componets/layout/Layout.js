import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Appbar'
import Footer from './Footer'

const Layout = () => {

return(
    <>
        <ResponsiveAppBar/>
            <Outlet/>
        <Footer/>
    </>
)
}

export default Layout