import React, { useState } from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer"
import CommentList from "./CommentList"

function App() {
  const [upvotes, setUpVotes] = useState(video.upvotes);
  const [downvotes, setDownVotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function toggleComments() {
    setShowComments(!showComments);
  }

  function handleUpVote() {
    setUpVotes(upvotes + 1);
  }

  function handleDownVote() {
    setDownVotes(downvotes + 1);
  }

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoPlayer video={video} />
      <button onClick={handleUpVote}>👍</button>
        <span>{upvotes}</span>
      <button onClick={handleDownVote}>👎</button>
        <span>{downvotes}</span>
      <br></br>
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentList comments={video.comments} />}
    </div>
  );
}

export default App;
