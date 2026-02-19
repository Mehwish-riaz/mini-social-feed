import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [newText, setNewText] = useState("");
  const [newMedia, setNewMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    const seededPosts = [
      {
        id: 1,
        user: "Mehwish",
        text: "Spring vibes only 🌸✨",
        image: "https://images.pexels.com/photos/31612715/pexels-photo-31612715.jpeg",
      },
      {
        id: 2,
        user: "Kashaf",
        text: "Let the flow calm your mind 🌊",
        video: "https://www.pexels.com/download/video/4087433/",
      },
      {
        id: 3,
        user: "Ali",
        text: "Fear kills more dreams than failure ever will. 💭",
        image: "https://images.pexels.com/photos/6956352/pexels-photo-6956352.jpeg",
      },
      {
        id: 4,
        user: "Zain",
        text: "Peace in every drop 🍂",
        video: "https://www.pexels.com/download/video/5663002/",
      },
    ];
    setPosts(seededPosts);
  }, []);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setNewMedia(url);

    if (file.type.startsWith("image")) setMediaType("image");
    else if (file.type.startsWith("video")) setMediaType("video");
  };

  const handleCreatePost = () => {
    if (!newText.trim() && !newMedia) return;

    const user = JSON.parse(localStorage.getItem("user")) || { username: "You" };
    const newPost = {
      id: posts.length + 1,
      user: user.username || "You",
      text: newText,
      image: mediaType === "image" ? newMedia : null,
      video: mediaType === "video" ? newMedia : null,
    };

    setPosts([newPost, ...posts]);
    setNewText("");
    setNewMedia(null);
    setMediaType("");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login"; // redirect to login
  };

  return (
    <>
    
  <div className="bg-gray-100 min-h-screen p-4 flex justify-center">
    <div className="w-full max-w-xl">

      {/* Logout */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Create Post */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-bold mb-2">Create Post</h3>

        <input
          type="text"
          placeholder="What's on your mind?"
          className="border w-full p-2 rounded mb-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />

        <label className="w-full mb-2 cursor-pointer">
          <div className="bg-gray-200 py-2 text-center rounded">Choose Media</div>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaUpload}
            className="hidden"
          />
        </label>

        <button
          onClick={handleCreatePost}
          className="bg-pink-500 w-full py-2 text-white rounded hover:bg-pink-600"
        >
          Post
        </button>

        {/* Preview */}
        {newMedia && mediaType === "image" && (
          <img src={newMedia} className="mt-2 max-h-60 w-full object-cover rounded" />
        )}
        {newMedia && mediaType === "video" && (
          <video controls className="mt-2 max-h-60 w-full rounded">
            <source src={newMedia} />
          </video>
        )}
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((p) => (
          <PostCard key={p.id} {...p} />
        ))}
      </div>

    </div>
  </div></>
);
}
export default Dashboard;
