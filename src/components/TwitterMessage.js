import React from 'react';

class TwitterMessage extends React.Component {
  //this.props.maxChars
  constructor(props) {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.value.length} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;