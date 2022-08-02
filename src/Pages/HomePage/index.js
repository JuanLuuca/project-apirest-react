import { HeaderArea, SearchArea, MainArea, ModalRegister } from "./styled"
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import adicionarimg from '../../assets/adicionar-usuario.png'
import { AuthContext } from "../../contexts/AuthProvider";

export const HomePage = () => {
    const { createUser } = useContext(AuthContext)

    const [repos, setRepos] = useState([])
    const [search, setSearch] = useState('')

    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const [openModal, setOpenModal] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        const ReqRes = async () => {
            const response = await api.get('/users');
            const data = response.data.data
            setRepos(data)
        }
        ReqRes()
    }, [api])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(name && job) {
            const create = await createUser(name, job)
            if(create) {
                alert('Usuário criado com sucesso.')
                setOpenModal(!openModal)
            } else {
                alert('Error ao criar usuário')
            }
        }
    }

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    const handleCloseModal = () => {
        setOpenModal(!openModal)
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
    }

    return (
        <>
            <ModalRegister active={openModal}>
                <div className="area-img">
                    <img src={adicionarimg} alt="" />
                    <span>Criar novo usuário</span>
                </div>
                <div className="form-area">
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={name}
                            type="text" 
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        <input 
                            value={job}
                            type="text" 
                            placeholder="Digite sua profissão"
                            onChange={(e) => setJob(e.target.value)}
                            required 
                        />
                        <div className="btn-form">
                            <button type="submit">Criar Usuário</button>
                        </div>
                        <p><strong onClick={handleCloseModal}>Não quero fazer o cadastro</strong></p>
                    </form>
                </div>
            </ModalRegister>
            <HeaderArea>
                <header>
                    <div className="header-area">
                        <div className="logo-header">RE</div>
                        <div className="btn-header" onClick={handleLogout}>
                            <span>Sair</span>
                        </div>
                    </div>
                </header>   
            </HeaderArea>
            <SearchArea>
                <div className="main-box">
                    <h1>Olá ReqRes Usuário</h1>
                    <input
                        value={search} 
                        type="text" 
                        placeholder="Pesquisar um usuário" 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="btn-create">
                        <button onClick={handleModal}>Criar Usuário</button>
                    </div>
                </div>
            </SearchArea>
            <MainArea>
                <div className="main-width">
                    <div className="main-div">
                        {repos.filter((repo) => 
                            repo.first_name.toLowerCase().includes(search.toLowerCase())
                        ).map((repo) => (
                            <Link to={`/users/${repo.id}`} style={{textDecoration: 'none'}}>
                                <div className="user-div" key={repo.id}>
                                    <span>{repo.first_name}</span>
                                    <p>{repo.email}</p>
                                    <img src={repo.avatar} alt="image" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </MainArea>
        </>
    )
}