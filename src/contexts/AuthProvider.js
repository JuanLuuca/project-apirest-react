import { createContext, useState } from "react";
import { api } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const register = async (email, password) => {
        try {
            const response = await api.post('/register', { email, password })
            return response.data
        } catch (error) {
            return null
        }
    }

    const createUser = async (name, job) => {
        try {
            const response = await api.post('/users', { name, job })
            return response.data
        } catch (error) {
            return null
        }
    }


    const signin = async (email, password) => {
        try {
            const response = await api.post('/login', { email, password })
            const token = await response?.data?.token
            localStorage.setItem('token', token)
            return response.data
        } catch (error) {   
            return null
        }
    }
    
    return (
        <AuthContext.Provider value={{ signin, register, createUser }}>
            {children}
        </AuthContext.Provider>
    )
}