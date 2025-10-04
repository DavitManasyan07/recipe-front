import "./NavBar.css";
import Button from "../Button/Button";

export default function NavBar({ loggedInUser }) {
  return (
    <nav className="navbar navbarBody">
      {!loggedInUser ? (
        <>
          <div className="navbar--part left">
            <Button link={"/"} text={"Main"} />
          </div>
          <div className="navbar--part right">
            <Button link={"/signIn"} text={"Sign in"} />
            <Button link={"/signUp"} text={"Sign up"} />
          </div>
        </>
      ) : (
        <>
          <div className="navbar--part left">
            <Button link={"/"} text={"Home"} />
            <Button link={"/addRecipe"} text={"Add recipe"} />
            <Button link={"/categories"} text={"Categories"} />
            <Button link={"/favorites"} text={"Favorites"} />
            <Button link={"/myRecipes"} text={"My recipes"} />
          </div>
          <div className="navbar--part right">
            <Button link={"/logOut"} text={"Log out"} />
          </div>
        </>
      )}
    </nav>
  );
}
