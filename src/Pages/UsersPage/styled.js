import styled from "styled-components";

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
    display: flex;
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