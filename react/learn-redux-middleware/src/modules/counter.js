import { createAction, handleActions } from 'redux-actions';

// 액션 타입
// '모듈이름/액션이름' 으로 명명
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 초기 상태와 리듀서(데이터 변형)
const initialState = 0;

// handleActions(각 액션에 대한 업데이트 함수, 초기 state)
const counter = handleActions({
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,
}, initialState);

export default counter;
