import React from 'react';
import TweetInteractions from './TweetInteractions';

function Tweet({ tweet }) {
  return (
    <li>
      {tweet.content}
      <TweetInteractions tweet={tweet} />
    </li>
  );
}

export default Tweet;