import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value
    this.setState({
      value: value
    })

    if (this.isValidPoem(value.trim())) {
      this.setState({
        valid: true
      })
    } else {
      this.setState({
        valid: false
      })
    }
  }

  isValidPoem(value) {
    let splitValue = value.split('\n')
    if (splitValue.length !== 3){
      return false
    }
    let line1 = splitValue[0].split(' ').filter(el => el !== '')
    let line2 = splitValue[1].split(' ').filter(el => el !== '')
    let line3 = splitValue[2].split(' ').filter(el => el !== '')
    
    if (line1.length === 5 && line2.length === 3 && line3.length === 5) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

export default PoemWriter;