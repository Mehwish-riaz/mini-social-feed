import { useState } from "react";

const PostCard = ({ user, text, image, video }) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim() === "") return;

    // 1. LocalStorage se logged-in user ka data uthana
    const loggedInUser = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };
    
    // 2. Naya comment object banana (taake naam aur text dono save hon)
    const newComment = {
      username: loggedInUser.username || "You",
      text: commentText
    };

    setComments([...comments, newComment]);
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
        <button onClick={() => setLiked(!liked)} className="text-pink-500 font-medium">
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button onClick={() => setReposted(!reposted)} className="text-blue-500 font-medium">
          {reposted ? "🔁 Reposted" : "🔁 Repost"}
        </button>
      </div>

      {/* Post Text */}
      <div className="px-3 pb-3">
        <p className="text-gray-800">{text}</p>
      </div>

      {/* Comments Section */}
      <div className="px-3 pb-3 border-t pt-3">
        <div className="flex space-x-2">
          <input
            type="text"
            className="border w-full p-2 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-500"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            className="text-pink-600 font-bold text-sm px-2"
            onClick={handleAddComment}
          >
            Post
          </button>
        </div>

        {/* Dynamic Comments List */}
        {comments.length > 0 && (
          <div className="mt-3 space-y-2">
            {comments.map((c, i) => (
              <p key={i} className="text-sm bg-gray-50 p-2 rounded">
                <span className="font-bold text-pink-600">{c.username}: </span> 
                {c.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;