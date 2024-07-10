import styled from "styled-components";

export const Inner = styled.div`
  height: 100%;
  background-color: skyblue;
  padding: 20px;
`;
export const ViewForm = styled.form`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;
export const ViewInput = styled.input`
  flex: 1;
  font-size: 17px;
  color: #fff;
  border: 0;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  padding: 10px 5px;
`;
export const ViewSubmit = styled.button`
  padding: 0 15px;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;
export const ViewUl = styled.ul`
  height: calc(100% - 71px);
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 20px;
`;
export const ViewLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  span {
    font-size: 17px;
    color: #fff;
  }
`;
export const ViewButton = styled.div`
  display: flex;
  gap: 10px;
  em {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    padding: 0 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .update {
    background-color: #679aff;
  }

  .delete {
    background-color: #f77272;
  }
`;
