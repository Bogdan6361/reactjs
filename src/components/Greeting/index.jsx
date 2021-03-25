import React from 'react'
import styles from './style.module.sass'

/*
function Greeting(props) {
  const {name, surname} = props;
  return <div>Hello, {name} {surname} !!!</div>;
}
*/

const Greeting = props => {
    const {name, isGreeting=true} = props;
    return(
        <div>
        {isGreeting ? 'Hello' : 'Bye'} {name}
        </div>
    );
};

/*
class Greeting extends React.Component {
  render() {
    return <div>Hello, {this.props.name} {this.props.surname} !!!</div>;
  }
}
*/
export default Greeting;
