import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const totalTime = 2;

class App extends React.Component {
  state = {
    selectedParagraph: 'My name is Aakash Mittal',
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };

  render() {
    return (
      <div className='app'>
        {/* Nav Section */}
        <Nav />
        {/* Landing page */}
        <Landing />

        {/* Challenge Section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
        />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
export default App;
