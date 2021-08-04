import React from 'react';
import ReactDOM from 'react-dom';
const myfirstelement = <h1>Hello React!</h1>
const myelement = (
  <div>
    <h2>Hi, I am a Car!</h2>
    {myfirstelement}
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John {1 + 1}</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </tbody>
    </table>
  </div>
);
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964, favoritecolor: "red"
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  }
  componentDidMount() {
    var x = 0;
    setTimeout(() => {
      x += 10;
      this.setState({ favoritecolor: `yellow ${x}` })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model}
          from {this.state.year} and favorite color is {this.state.favoritecolor}.
        </p>
        {myelement}
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}
 class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  }
  render() {
    return (
      <div>
        <Car model="Mustang" />
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    var x = 10;
    setTimeout(() => {
      x += 2;
      this.setState({ favoritecolor: "yellow" + x })
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <Header></Header>
      </div>
    );
  }
}
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <div>
        <Header1 />
        <h1>Hello World!</h1></div>
    );
  }
}

class Football extends React.Component {
  shoot = () => {
    console.log(this);
    /*
    The 'this' keyword refers to the component object
    */
  }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong style={{color: "red"}}>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car color="white" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage/>, document.getElementById('root'));
