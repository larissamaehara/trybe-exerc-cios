import styled from 'styled-components';

type PropsListItem = {
  taskCompleted: boolean,
};

export const ListItem = styled.li<PropsListItem>`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.primary};
  text-decoration: ${(props) => (props.taskCompleted ? 'line-through' : 'none')};
  color: ${(props) => (props.taskCompleted
    ? props.theme.colors.secondaryText : props.theme.colors.primaryText)};

  &:first-of-type {
    margin-top: 16px;
    border-radius: 4px 4px 0 0;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const LabelCheckbox = styled.label`  
  cursor: pointer;
  &:before {
    content: '';
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
  }

  input:checked + &:before {
    background: rgb(87,221,255);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='9'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='2' d='M1 4.304L3.696 7l6-6'/%3E%3C/svg%3E");
    background-size: 12px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  background: none;
  margin-bottom: 2px;
  cursor: pointer;
`;
