import { Users, HeaderArea } from "./styled";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/api";

export const UsersPage = () => {
    const { id } = useParams();

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const ReqRes = async () => {
            const response = await api.get(`/users/${id}`);
            const data = response.data.data
            setRepos(data)
        }
        ReqRes()
    }, [api])

    return (
        <>
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

            <Users>
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
                                <button>Editar</button>
                            </div>
                            <div className="btn-delete-user">
                                <button>Excluir</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Users>
        </>
    )
}