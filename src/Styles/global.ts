import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 83.5%
        }
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 55vw;
        height: 65vh;
        background: white;
        padding: 2rem;
        position: relative;
        border-radius: 3rem;
    
    }
    .react-modal-close {
        height:1.5rem;
        width: 1.5rem;
        position: absolute;
        right: 3rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(-2)
        }
    }
    

`