import React from 'react';
import SynthContainer from './synth/synth_container';
import RecorderContainer from './recorder/recorder_container';
import JukeboxContainer from './jukebox/jukebox_container';

class App extends React.Component {
  render () {
    return (
      <main>
        <h1>Synthaseizure</h1>
        <SynthContainer />
        <RecorderContainer />
        <h3>Jukebox</h3>
        <JukeboxContainer />
      </main>
    );
  }
}

export default App;
