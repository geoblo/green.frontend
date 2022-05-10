import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter
      number={number} 
      onIncrease={onIncrease} 
      onDecrease={onDecrease} 
    />
  );
};

// 리덕스 스토어 안의 state를 컨테이너 컴포넌트의 props로 넘겨주기 위한 함수
// const mapStateToProps = state => ({
//   number: state.counter.number
// });

// 액션 생성 함수를 컨테이너 컴포넌트의 props로 넘겨주기 위한 함수
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });

export default React.memo(CounterContainer);