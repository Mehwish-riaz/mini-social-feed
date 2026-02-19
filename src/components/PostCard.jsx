import { useState } from "react";

const PostCard = ({ user, text, image, video }) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim() === "") return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div className="bg-white rounded-md shadow mb-6">
      {/* Post Header */}
      <div className="flex items-center p-3">
        <div className="w-10 h-10 rounded-full bg-pink-500 mr-3"></div>
        <span className="font-bold">{user}</span>
      </div>

      {/* Post Media */}
      {image && (
        <img src={image} alt="post" className="w-full max-h-[400px] object-cover" />
      )}
      {video && (
        <video controls className="w-full max-h-[400px] object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Post Actions */}
      <div className="flex items-center p-3 space-x-4">
        <button onClick={() => setLiked(!liked)} className="text-pink-500">
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button onClick={() => setReposted(!reposted)} className="text-blue-500">
          {reposted ? "🔁 Reposted" : "🔁 Repost"}
        </button>
      </div>

      {/* Post Text */}
      <div className="px-3 pb-3">
        <p>{text}</p>
      </div>

      {/* Comments Section */}
      <div className="px-3 pb-3">
        <div className="flex space-x-2">
          <input
            type="text"
            className="border w-full p-1 rounded"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            className="text-blue-500 font-bold"
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>

        {comments.length > 0 && (
          <div className="mt-2">
            {comments.map((c, i) => (
              <p key={i} className="text-sm"><span className="font-bold">User:</span> {c}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
