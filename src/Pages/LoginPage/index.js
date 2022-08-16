import { Container, AreaLogin } from "./styled"
import loginimg from '../../assets/user-login.png'
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import { Private } from "../../Private/Private";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const { signin } = useContext(AuthContext);

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const tokenGet = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email && password) {
            const logged = await signin(email, password)
            if(logged) {
                console.log(logged)
                alert('Logado com sucesso')   
                navigate('/home')
                window.location.reload()
            } else {
                alert('Usuario ou senha incorretos')
            }
        }

    }

    return (
        <Container>
            {
                tokenGet ? 
                <Private/> :
            
            <AreaLogin>
                <div className="area-img">
                    <img src={loginimg} alt="" />
                    <span>Seja Bem Vindo!</span>
                </div>
                <div className="form-area">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={email} 
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            value={password}
                            type="password" 
                            placeholder="Digite sua senha" 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <div className="btn-form">
                            <button type="submit">Entrar</button>
                        </div>
                        <p>Não tem conta ainda? <Link to="/register" style={{textDecoration: 'none'}}><strong>Criar uma conta</strong></Link></p>
                    </form>
                </div>
            </AreaLogin>
            }
        </Container>
    )
}