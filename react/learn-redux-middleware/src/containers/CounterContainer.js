import { connect } from "react-redux";
import Counter from "../components/Counter";
// import { increase, decrease } from '../modules/counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />;
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

// connect: 카운터 컨테이너 컴포넌트를 리덕스와 연결
export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);