import styled from "styled-components";

export const ModalEdit = styled.div`
    display: ${e => e.active ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    background-color: #479bd8;
    opacity: 0.9;
    border-radius: 10px;
    height: 450px;
    width: 380px;
    color: white;



    .area-img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            height: 90px;
            width: 90px;
            margin-top: 40px;
        }

        span {
            font-size: 20px;
            margin-top: 9px;
        }
    }

    .form-area {
        display: flex;
        justify-content: center;
        align-items: center;

        form {
    
            input {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 300px;
                margin-top: 25px;
                outline: none;
                border: none;
                padding: 20px;
                font-size: 16px;
                border-end-start-radius: 10px;

                &:focus {
                    background-color: black;
                    color: white;
                }

            }

            .btn-form {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 25px;

                button {
                    border: none;
                    outline: none;
                    background-color: black;
                    color: white;
                    width: 100%;
                    height: 40px;
                    cursor: pointer;
                    font-size: 17px;
                    border-radius: 5px;

                    &:hover {
                        transition: all ease .4s;
                        background-color: aliceblue;
                        color: black;
                    }
                }
            }

            p {
                text-align: center;
                margin-top: 25px;
                font-size: 18px;

                strong {
                    color: black;
                    cursor: pointer;

                    &:hover {
                        color: #f9f9f9;
                    }
                }
            }
        }
    }
`;

export const HeaderArea = styled.div`
    background-color: #479bd8;
    height: 80px;
    color: white;

    header {
        max-width: 1140px;
        margin: auto;

        .header-area {
            display: flex;
            justify-content: space-between;
            align-items: center;
   
            .logo-header {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                width: 50px;
                background-color: white;
                color: black;
                border-radius: 100%;
                margin-top: 14px;
                font-size: 25px;
                font-weight: bold;
            }

            .btn-header {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: white;
                height: 35px;
                width: 90px;
                margin-top: 12px;
                border-radius: 5px;
                color: black;
                cursor: pointer;
                font-size: 19px;

                &:hover {
                    background-color: black;
                    transition: all ease .4s;
                    color: white;
                }

                span {
                    color: black;

                    &:hover {
                        transition: all ease .4s;
                        color: white;
                    }
                }
            }
        }
    }
`;

export const Users = styled.div`
    display: ${e => e.active ? 'none' : 'flex'};
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    background-color: #479bd8;
    opacity: 0.9;
    border-radius: 10px;
    height: 400px;
    width: 380px;
    color: white;

    .area-img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            height: 10rem;
            border-radius: 100%;
            width: 10rem;
            margin-top: 40px;
        }

        .users-name {
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                margin-left: 8px;
                font-size: 25px;
                margin-top: 15px;
                color: black;
            }
        }
        h1 {
            margin-top: 0.5rem;
            color: black;
        }

        .btn-user {
            display: flex;
            justify-content: space-around;
            margin: 1.5rem;

            .btn-edit-user {
                margin-right: 8rem;

                button {
                    border: none;
                    outline: none;
                    height: 40px;
                    width: 80px;
                    font-size: 1rem;
                    font-weight: bold;
                    border-radius: 10px;
                    cursor: pointer;

                    &:hover {
                        transition: all ease .4s;
                        background-color: black;
                        color: white;
                    }
                }
            }

            .btn-delete-user {

                button {
                    border: none;
                    outline: none;
                    height: 40px;
                    width: 80px;
                    font-size: 1rem;
                    font-weight: bold;
                    border-radius: 10px;
                    cursor: pointer;

                    &:hover {
                        transition: all ease .4s;
                        background-color: black;
                        color: white;
                    }
                }
            }
        }
    }
`;  

