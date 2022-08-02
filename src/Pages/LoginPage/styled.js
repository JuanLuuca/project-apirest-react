import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`;

export const AreaLogin = styled.div`
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