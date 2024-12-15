import React, { useState, useRef } from 'react';

function TweetInput({ onAddTweet }) {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content.trim() !== '') {
      onAddTweet({ content });
      setContent('');
      textareaRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Seriously, who cares about your tweets?"
      />
      <button type="submit">UNTWEET</button>
    </form>
  );
}

export default TweetInput;