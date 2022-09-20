import styled from 'styled-components';
export const Container = styled.div`
  &label {
    margin-bottom: 4px;
  }
  & input {
    margin-top: 5px;
    display: block;
    width: 200px;
    margin-bottom: 10px;
  }
`;

export const LiItem = styled.li`
  display: flex;
  align-items: center;
  & span {
    margin-right: 10px;
  }
  & button {
    text-decoration: none;
    display: inline-block;
    color: white;
    padding: 5px 5px;
    border-radius: 10px;
    letter-spacing: 2px;
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
  }
`;
