import "./App.css";
import { selectLoggedInUser } from "./authSlice";
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main/Main";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home/Home";
import SignUp from "./Sign-Up/Sign-Up";
import SignIn from "./Sign-In/Sign-In";

function App() {
  const loggedInUser = useSelector(selectLoggedInUser);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar loggedInUser={loggedInUser}/>
        <Routes>
          {!loggedInUser ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/myRecipes" element={<Main />} />
              <Route path="/favorites" element={<Main />} />
              <Route path="/addRecipe" element={<Main />} />
              <Route path="/categories" element={<Main />} />
              <Route path="/profile/:userID" element={<Main />} />
              <Route path="/recipe/:recipeID" element={<Main />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
