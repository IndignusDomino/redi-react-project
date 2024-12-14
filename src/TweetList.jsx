import React from 'react';
import Tweet from './Tweet';

function TweetList({ tweets }) {
  return (
    <ul>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </ul>
  );
}

export default TweetList;

const { tweets, searchTerm } = useContext(TweetContext);

const filteredTweets = tweets.filter(tweet => 
  tweet.content.toLowerCase().includes(searchTerm.toLowerCase())
);
