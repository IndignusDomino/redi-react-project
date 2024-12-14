import React, { useState, useContext } from 'react';
import { TweetContext } from '../TweetContext'; // Assuming you create a TweetContext

function TweetInteractions({ tweet }) {
  const { tweets, setTweets } = useContext(TweetContext);
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    // Update the tweet's like count in your state (and potentially on the server)
    const updatedTweets = tweets.map(t => 
      t === tweet ? { ...t, likes: liked ? t.likes - 1 : t.likes + 1 } : t
    );
    setTweets(updatedTweets);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    // Update the tweet's retweet count in your state (and potentially on the server)
    const updatedTweets = tweets.map(t => 
      t === tweet ? { ...t, retweets: retweeted ? t.retweets - 1 : t.retweets + 1 } : t
    );
    setTweets(updatedTweets);
  };

  // Add reply functionality (you might need a form or a modal here)

  return (
    <div className="tweet-interactions">
      <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
      <button onClick={handleRetweet}>{retweeted ? 'Unretweet' : 'Retweet'}</button>
      <button>Reply</button>
    </div>
  );
}

export default TweetInteractions;