import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../componets/pages/Principal";
import Layout from "../componets/layout/Layout";
import NotFound from "../componets/pages/NoFound";
import Laptop from "../componets/pages/Laptop";


const Router = () =>{

return(
    <BrowserRouter>
        <Routes>     
            <Route path="/" element={<Layout />} >
                <Route index element={<Principal />} />              
                <Route path="laptop/:id" element={<Laptop />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
}
export default Router


// No olvidar llamar al componente Outlet en Layout
