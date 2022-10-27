import React, { useEffect } from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./Firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //logout user
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* app body */}
          {/* sidebar */}
          <Sidebar />
          {/* feed section */}
          <Feed />
          {/* right widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
