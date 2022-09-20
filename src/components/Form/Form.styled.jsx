import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & input {
    margin-top: 5px;
    display: block;
    width: 200px;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  display: flex;
  width: 100px;
  /* height: 40px;  */
  color: white;
  /* padding: 20px 30px; */
  margin-top: 10px;

  border-radius: 10px;

  /* text-transform: uppercase; */

  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  :hover {
    background-position: right center;
  }
`;
