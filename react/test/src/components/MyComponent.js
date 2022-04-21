import PropTypes from 'prop-types';
import { Component } from 'react';

// class 형
class MyComponent extends Component {
  static defaultProps = {
    name: '디폴트 이름',
    number: 0,
  };
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    console.log(this.props);
    // const { name, number, children } = this.props;

    return (
      <div>
        안녕하세요. 제 이름은 {this.props.name} 입니다. 숫자는 {this.props.number} <br />
        children 값은 {this.props.children} 입니다.
      </div>
    );
  }
}

// function MyComponent(p) {
//   console.log(p);
//   const { name, number, children } = p;

//   return (
//     // <div>
//     //   안녕하세요. 제 이름은 {p.name} 입니다. 숫자는 {p.number} <br />
//     //   children 값은 {p.children} 입니다.
//     // </div>
//     <div>
//       안녕하세요. 제 이름은 {name} 입니다. 숫자는 {number} <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// }

// function MyComponent({ name, number, children }) {
//   return (
//     // <div>
//     //   안녕하세요. 제 이름은 {p.name} 입니다. 숫자는 {p.number} <br />
//     //   children 값은 {p.children} 입니다.
//     // </div>
//     <div>
//       안녕하세요. 제 이름은 {name} 입니다. 숫자는 {number} <br />
//       children 값은 {children} 입니다.
//     </div>
//   );
// }

// MyComponent.defaultProps = {
//   name: '디폴트 이름',
//   number: 0,
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
// };

export default MyComponent;
