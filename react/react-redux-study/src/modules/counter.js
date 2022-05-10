import { createAction, handleActions } from 'redux-actions';

// 액션 타입
// '모듈이름/액션이름' 으로 명명
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태와 리듀서(데이터 변형)
const initialState = {
  number: 0
};

// 리듀서는 state와 action을 받음
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1
//       };
//     default:
//       return state;
//   }
// }

// handleActions(각 액션에 대한 업데이트 함수, 초기 state)
const counter = handleActions({
  [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  [DECREASE]: (state, action) => ({ number: state.number - 1 }),
}, initialState);

export default counter;
