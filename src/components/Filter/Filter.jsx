import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const idUser = nanoid();

const Filter = ({ value, onChange }) => (
  <FieldInput>
    <label htmlFor={idUser}>Find contacts by name</label>
    <InputFind id={idUser} type="text" value={value} onChange={onChange} />
  </FieldInput>
);

const FieldInput = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const InputFind = styled.input`
  margin-top: 5px;
  width: 300px;
  height: 24px;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 10px;
`;
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
