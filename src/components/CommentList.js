import React from "react";
import Comment from "./Comment";

function CommentList( { comments } ){
    return (
        <div>
            <h2>Comments: </h2>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
}        

export default CommentList;