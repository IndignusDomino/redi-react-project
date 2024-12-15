import React, { useState } from 'react';

function TweetInteractions({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes || 0);
  const [retweets, setRetweets] = useState(tweet.retweets || 0);
  const [replies, setReplies] = useState(tweet.replies || []);
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (event) => {
    event.preventDefault();
    if (replyContent.trim() !== '') {
      setReplies([...replies, replyContent]);
      setReplyContent('');
    }
  };

  return (
    <div className="tweet-interactions">
      <div className="replies">
        {replies.map((reply, index) => (
          <div key={index} className="reply">
            {reply}
          </div>
        ))}
      </div>
      <form onSubmit={handleReplySubmit}>
        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write your reply..."
        />
        <button type="submit">Submit Reply</button>
      </form>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
      <button onClick={() => setRetweets(retweets + 1)}>Retweet ({retweets})</button>
      <button>Reply ({replies.length})</button>
    </div>
  );
}

export default TweetInteractions;