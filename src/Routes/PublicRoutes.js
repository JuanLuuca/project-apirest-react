import { LoginPage } from "../Pages/LoginPage"
import { Routes, Route } from 'react-router-dom'
import { CadastroPage } from "../Pages/CadastroPage"


export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<CadastroPage />}></Route>
        </Routes>        
    )
}