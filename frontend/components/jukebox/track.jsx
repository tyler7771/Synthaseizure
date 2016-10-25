import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='track'>
        <h4>{this.props.track.name}</h4>
        <button onClick={this.props.onPlay} disabled={this.props.isRecording}>Play</button>
      </div>
    );
  }
}

export default Track;
