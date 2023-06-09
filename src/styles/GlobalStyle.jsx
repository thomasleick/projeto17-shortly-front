import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lexend Deca', 'Roboto', sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 10px;
    }
  }
  input {
      width: 769px;
      height: 60px;
      text-indent: 22px;
      background: #ffffff;
      border: 2px solid rgba(120, 177, 89, 0.25);
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px;

      :focus {
        background-color: rgba(120, 177, 89, 0.015);
        border: 2px solid rgba(120, 177, 89, 0.5);
        outline: none;
      }
      :disabled {
        background-color: rgba(120, 177, 89, 0.12);
        color: #999;
        cursor: not-allowed;
        text-decoration: line-through;
      }

      ::placeholder {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9c9c9c;
      }
    }
    button {
      width: 182px;
      height: 60px;
      background: #5d9040bb;
      border: 2px solid rgba(120, 177, 89, 0.25);
      box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
      border-radius: 12px;
      margin-top: 51px;
      cursor: pointer;

      &:disabled {
        background-color: rgba(120, 177, 89, 0.12);
        color: #999;
        cursor: not-allowed;
        text-decoration: line-through;
      }

      h2 {
        font-family: "Lexend Deca";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #ffffff;
      }
    }

    button:not(:disabled):hover,
    button:not(:disabled):focus {
      background: #5d9040ff;
      border: 2px solid rgba(120, 177, 89, 0.5);
      outline: none;
    }
`;

export default GlobalStyle;
