import React, { useEffect } from "react";
import Post from "../post/Post";
import { User } from "../user/User";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../actions/User";
import Loader from "../loader/Loader";
import { Typography } from "@mui/material";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );
  const { users, loading: userLoading } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return loading || userLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts.length ? (
          posts.map((post) => {
            const { _id, caption, image, likes, comments, owner } = post;
            return (
              <Post
                key={_id}
                postId={_id}
                caption={caption}
                postImage={image.url}
                likes={likes}
                comments={comments}
                ownerImage={owner.avatar.url}
                ownerName={owner.name}
                ownerId={owner._id}
              />
            );
          })
        ) : (
          <Typography variant="h6">No posts yet</Typography>
        )}
      </div>

      <div className="homeright">
        {users && users.length ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography variant="h8"> No users yet</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
