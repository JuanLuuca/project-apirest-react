import { Users, HeaderArea, ModalEdit } from "./styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api";
import adicionarimg from '../../assets/do-utilizador.png'

export const UsersPage = () => {

    const { id } = useParams();


    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const [openModal, setOpenModal] = useState()
    const [closeUsers, setCloseUsers] = useState();

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const ReqRes = async () => {
            const response = await api.get(`/users/${id}`);
            const data = await response.data.data
            setRepos(data)
        }
        ReqRes()
    }, [api])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(name && job) {
            const response = await api.put(`/users/${id}`, { name, job })
            const data = await response.data
            if(data) {
                console.log(data)
                alert('Atualização de dados feita com sucesso')
                setOpenModal(!openModal)
                setCloseUsers(!openModal)
            } else {
                alert('error: não foi possivel atualizar os dados')
            }
        }

    }

    const handleDelUser = async () => {
        try {
            await api.delete(`/users/${id}`)
            alert('usuario deletado com sucesso')
        } catch (error) {
            alert('não foi possivel deletar usuario')
        }
    }

    const handleCloseModal = () => {
        setOpenModal(!openModal)
        setCloseUsers(!openModal)
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal)
        setCloseUsers(!closeUsers)
    }

    return (
        <>
            <ModalEdit active={openModal}>
                <div className="area-img">
                    <img src={adicionarimg} alt="" />
                    <span>Editar usuário</span>
                </div>
                <div className="form-area">
                    <form onSubmit={handleSubmit}>
                        <input 
                            value={name}
                            type="text" 
                            placeholder="Digite um novo nome"
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                        <input 
                            value={job}
                            type="text" 
                            placeholder="Digite uma nova profissão"
                            onChange={(e) => setJob(e.target.value)}
                            required 
                        />
                        <div className="btn-form">
                            <button type="submit">Editar Usuário</button>
                        </div>
                        <p><strong onClick={handleCloseModal}>Não quero editar o usuario</strong></p>
                    </form>
                </div>
            </ModalEdit>

            <HeaderArea>
                    <header>
                        <div className="header-area">
                            <Link to="/home" style={{textDecoration: 'none'}}>
                            <div className="logo-header">RE</div>
                            </Link>
                            <div className="btn-header">
                                <Link to="/home" style={{textDecoration: 'none'}}>
                                    <span>Voltar</span>
                                </Link>
                            </div>
                        </div>
                    </header>   
            </HeaderArea>

            <Users active={closeUsers}>
                {Array(repos).map((repo) => (
                    <div className="area-img">
                        <img src={repo.avatar} />
                        <div className="users-name">
                            <span>{repo.first_name}</span>  
                            <span>{repo.last_name}</span> 
                        </div>
                        <h1>{repo.email}</h1>
                        <div className="btn-user">
                            <div className="btn-edit-user">
                                <button onClick={handleOpenModal}>Editar</button>
                            </div>
                            <div className="btn-delete-user">
                                <button onClick={handleDelUser}>Excluir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Users>
        </>
    )
}