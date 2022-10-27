import React from "react";
// icon imports from MUI
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";

import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
//importing external FLIP MOVE DESIGN
import FlipMove from "react-flip-move";

import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  // react hooks
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  //testing posts data fetchin
  // console.log(posts)

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    //testing posts data fetching
    // console.log(posts);
  }, []);
  //functions
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              onClick={(e) => {
                sendPost(e);
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />

          <InputOptions Icon={SubscriptionIcon} title="Video" color="#E7A33E" />

          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />

          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* posts area */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* Easy but lengthy way of doing the same above  */}
      {/* {posts.map((post) => {
        const id = post.id;
        const { name, description, message, photoUrl } = post.data;

        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })} */}
    </div>
  );
};

export default Feed;
