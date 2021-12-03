import type { NextPage } from 'next'
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addState, subState, data } from "../src/store/index"

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const state: number = useSelector((state: data) => state.number) || 0;

  const onClickAddState = () => {
    dispatch(addState());
  };

  const onClickSubState = () => {
    dispatch(subState());
  };

  return (
    <Wrapper>
      <ButtonWrap>
        <AddAndSubButton onClick={onClickAddState}> + </AddAndSubButton>
        <AddAndSubButton onClick={onClickSubState}> ─ </AddAndSubButton>
      </ButtonWrap>
      <ShowState>{state}</ShowState>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const AddAndSubButton = styled.button`
  font-size: 24px;
  margin: 8px;
`

const ShowState = styled.div`
  font-size: 40px;
  border: solid 4px black;
  padding: 16px 24px;
`