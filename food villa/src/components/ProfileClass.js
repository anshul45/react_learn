import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render(props) {
    return (
      <>
        <h1>Profile Class Component</h1>
        <h2>name : {this.props.name}</h2>
        <h3>count: {this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count
        </button>
      </>
    );
  }
}

export default Profile;
