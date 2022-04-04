import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border-box: 0;
    }

    body {
        --webkit-font-smoothing: antialiased;
        font-family: sans-serif;
        color: white;
        background-color: #ef5734;
        background-image: linear-gradient(315deg, #ffcc2f 10%, #E2774E 94%);min-height: 100vh;
    }

    hr {
        max-width: 500px;
        margin: 0 auto;
        border: solid 1px #F9E6DF;
    }
    
    .header {
        padding: 20px;

        .title {
            text-align: center;
            font-size: 35px;
            margin-bottom: 20px;
        }

        .content {
            position: relative;
            max-width: 400px;
            margin: 0 auto;
            padding: 15px 50px;
            box-sizing: border-box;

            // comentar a baixo versao 2
            background: #FFF3E4;

            border-radius: 5px;
            margin-bottom: 20px;
            color: #454545;
            overflow: hidden;

            .ico {
                position: absolute;
                margin-left: 80%;
                margin-top: -2px;
                color: orange;
                // color: white; versão 2
                font-size: 19px;
            }

            .sub_title__content {
                font-size: 14px;
            }

            .title_content {
                padding: 10px 0;
                font-size: 35px;
            }
    
            .grid-temp {
                margin-bottom: 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                width: 80%;
    
                div {
                    margin-top: 5px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;

                    span {
                        font-size: 15px;
                        color: gray;
                        // color: white; versão 2
                    }
                }

                i {
                    color: orange;
                    // color: white; versão 2
                }
            }

            hr {
                border: 1px solid orange;
                // border: 1px solid white; versão 2
                border-radius: 5px;
            }
    
            .flex {
                display: flex;
                justify-content: space-between;
                text-align: center;

                h6 {
                    font-size: 14px;
                    color: orange;
                    // color: white; versão 2
                }

                span {
                    font-size: 15px;
                    font-weight: bold;
                }
            }
        }

        .search {
            text-align: center;
            position: relative;

            input {
                height: 20px;
                width: 100%;
                max-width: 380px;
                border: 1px solid gray;
                border-radius: 5px;
                padding: 10px;
                font-size: 17px;
        
                &::placeholder {
                    color: gray;
                    font-size: 17px
                }
            }

            i {
                position: absolute;
                color: gray;
                margin-left: -30px;
                margin-top: 13px;
            }
        }
        
    }

    .city {
        padding: 10px 30px;
        max-width: 400px;
        margin: 0 auto;

        .grid {
            margin-top: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            color: white;

            h4 {
                font-size: 14px;
            }
            
            div {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }
    }

    @media (max-width: 700px) {

        .header .title {
            font-size: 25px;
            text-align: left;
        }

        .header .search {
            width: 100%;
            margin: 0 auto;
        }

        .header .search input {
            max-width: 280px;
        }

        .city .grid {
            grid-template-columns: 1fr;
        }

        .city .grid h4 {
            font-size: 20px;
        }

        .city .grid div {
            margin-bottom: 10px;
            font-size: 18px;
        }

        .city .grid div .responsive-none {
            display: none;
        }
    }
`

