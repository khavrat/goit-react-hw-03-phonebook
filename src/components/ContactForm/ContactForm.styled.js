import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 40px;
`;

export const FormInput = styled.input`
  display: block;
  width: 250px;
  padding: 6px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.2;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const FormBtn = styled.button`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.1;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  color: #000000;
  transition: background-color 250ms linear, color 250ms linear;
  cursor: pointer;
  &:hover {
    background-color: #5036ff;
    color: #ffffff;
  }
`;
