import styled from '@emotion/styled';

export const StyledBtn = styled.button`
  display: inline-flex;
  align-items: center;

  text-transform: capitalize;
  width: 100px;
  font-size: 16px;
  gap: 10px;

  margin: 0 10px;
  padding: 10px;

  border: none;
  border-radius: 5px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  transition: all 0.2s ease-in-out;

  background-color: rgb(90, 109, 221);
  color: #fff;
  cursor: pointer;

  :hover {
    background-color: #a6b3ff;
    color: #9e0202;
    svg {
      fill: #9e0202;
      stroke: #9e0202;
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  gap: 5px;
`;
