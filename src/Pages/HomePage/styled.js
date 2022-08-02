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

                &:hover {
                    background-color: black;
                    transition: all ease .4s;
                    color: white;
                }

                span {
                    font-size: 19px;
                }
            }
        }
    }
`;

export const SearchArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    .main-box {
        max-width: 1140px;
        margin: auto;

        h1 {
            text-align: center;
            font-size: 40px;
            margin-top: 15px;
        }

        input {
            outline: none;
            border: none;
            height: 40px;
            width: 600px;
            padding: 20px;
            margin-top: 25px;
            font-size: 17px;
            

            &:focus {
                border: 2px solid black;
            }
        }

        .btn-create {
            display: inline-block;
            margin-left: 30px;

            button {
                font-size: 16px;
                color: white;
                cursor: pointer;
                border-radius: 3px;
                height: 40px;
                width: 100px;
                outline: none;
                border: none;
                background-color: #479bd8;

                &:hover {
                    transition: all ease .4s;
                    background-color: black;
                }
            }
        }
    }
`;

export const MainArea = styled.div`
    display: block;
    margin-top: 70px;
    
    .main-width {
        max-width: 1140px;
        margin: auto;
    }

    .main-div {
        display: grid;  
        text-align: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 90px;

        span {
            font-size: 18px;
            color: black;
        }

        p {
            font-size: 17px;
            margin-top: 10px;
            color: black;
        }

        img {
            height: 9rem;
            margin-top: 15px;
        }
    }
`;

export const ModalRegister = styled.div`
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