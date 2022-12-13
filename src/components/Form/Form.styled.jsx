import styled from 'styled-components';
export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  border: solid 1px rgb(205, 100, 250);
  border-radius: 2px;
  padding: 10px;
`;
export const LabelUser = styled.label`
  margin-bottom: 5px;
`;

export const InputUser = styled.input`
  width: 300px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 10px;
`;
export const ButtonAdd = styled.button`
  width: 100px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 3px;
  background-color: #e0ffff;
  border: solid 1px;
  border-radius: 2px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background-color: rgb(135, 206, 250);
  }
`;
