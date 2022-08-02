import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"
import { Routes, Route } from 'react-router-dom'
import { UsersPage } from "../Pages/UsersPage/index"


export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/users/:id" element={<UsersPage />}></Route>
        </Routes>        
    )
}