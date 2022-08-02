import { Container, AreaLogin } from "./styled"
import cadastroimg from '../../assets/adicionar-ficheiro.png'
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import { Private } from "../../Private/Private";
import { Link } from "react-router-dom";

export const CadastroPage = () => {
    const { register } = useContext(AuthContext);

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const tokenGet = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

       if(email && password) {
            const cadastro = await register(email, password)
            if(cadastro && password === confirmPassword) {
                alert('Cadastro efetuado com sucesso')
                navigate('/')
            } else {
                alert('As senhas não estão iguais, tente novamente')
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
                    <img src={cadastroimg} alt="" />
                    <span>Faça seu Cadastro</span>
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
                        <input 
                            value={confirmPassword}
                            type="password" 
                            placeholder="Confirme sua senha" 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                        <div className="btn-form">
                            <button type="submit">Cadastrar</button>
                        </div>
                        <p>Já tem conta? <Link to="/" style={{textDecoration: 'none'}}><strong>Faça seu login</strong></Link></p>
                    </form>
                </div>
            </AreaLogin>
            }
        </Container>
    )
}