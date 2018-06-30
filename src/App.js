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
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
