import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

//function to shuffle an array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriend: [],
    score: 0,
    topScore: 0
  };

  //use the shuffle function to shuffle friends
  handleShuffle = () => {
    let shuffleFriends = shuffle(friends);
    this.setState({friends: shuffleFriends})
  };

  //function to add points to tally
  handlePoints = () => {
    const updateScore = this.state.score + 1;
    this.setState({
      score: updateScore
    });
    if (updateScore > this.state.topScore) {
      this.setState({ topScore: updateScore});
    } else if (updateScore === 12) { 
      alert("You Win!");
    }
    this.handleShuffle();
  }

  //function to start new game
  handleNewGame = () => {
    this.setState({
      clickedFriend: [],
      score: 0,
      topScore: this.state.topScore      
    });
    this.handleShuffle();
  };

  //function to handle when a card is clicked
  handleClickedFriend = id => {
    if(this.state.clickedFriend.indexOf(id) === -1) {
      this.handlePoints();
      this.setState({ clickedFriend: this.state.clickedFriend.concat(id)});
    } else {
      this.handleNewGame();
    }
  }; 


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          title={this.state.title}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title>Click on any image, but beware, click on the same image twice and you lose the game! </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleShuffle={this.handleShuffle}
            handlePoints={this.handlePoints}
            handleNewGame={this.handleNewGame}
            handleClickedFriend={this.handleClickedFriend}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
