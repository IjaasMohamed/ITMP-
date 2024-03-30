import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../../../api/FirestoreAPI";
import LikeButton from "../LikeButton";
import "./index.scss";

export default function PostsCard({ posts, id, getEditData }) {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    if (currentUser?.id && posts?.userID) {
      getConnections(currentUser.id, posts.userID, setIsConnected);
    }
  }, [currentUser?.id, posts?.userID]); // Use optional chaining to prevent undefined access

  const user = allUsers.find(user => user.id === posts?.userID); // Find the user safely

  if (!isConnected && currentUser.id !== posts?.userID) {
    // Protect against undefined access with optional chaining
    return null; // Return null or a placeholder component if the conditions aren't met
  }

  return (
    <div className="posts-card" key={id}>
      {/* Conditional rendering inside return statement, checking if user exists */}
      {user && (
        <>
          <div className="post-image-wrapper">
            {currentUser.id === posts?.userID && ( // Optional chaining for safety
              <div className="action-container">
                <BsPencil
                  size={20}
                  className="action-icon"
                  onClick={() => getEditData(posts)}
                />
                <BsTrash
                  size={20}
                  className="action-icon"
                  onClick={() => deletePost(posts.id)}
                />
              </div>
            )}
            <img
              alt="profile-image"
              className="profile-image"
              src={user.imageLink} // Directly using `user` since it's now guaranteed to be defined
            />
            <div>
              <p
                className="name"
                onClick={() =>
                  navigate("/profile", {
                    state: { id: posts?.userID, email: posts.userEmail },
                  })
                }
              >
                {user.name}
              </p>
              <p className="headline">{user.headline}</p>
              <p className="timestamp">{posts.timeStamp}</p>
            </div>
          </div>
          {posts.postImage && (
            <img
              onClick={() => setImageModal(true)}
              src={posts.postImage}
              className="post-image"
              alt="post-image"
            />
          )}
          <p className="status" dangerouslySetInnerHTML={{ __html: posts.status }}></p>
          <LikeButton userId={currentUser?.id} postId={posts.id} currentUser={currentUser} />
          <Modal
            centered
            open={imageModal}
            onOk={() => setImageModal(false)}
            onCancel={() => setImageModal(false)}
            footer={[]}
          >
            <img src={posts.postImage} className="post-image modal" alt="post-image" />
          </Modal>
        </>
      )}
    </div>
  );
}
