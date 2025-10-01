export default function NavBar() {
    return (
        <nav className="navbar"> {/* logged in*/}
            <div className="navbar--part left">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add-recipe">Add recipe</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li><a href="/my-recipes">My recipes</a></li>
                </ul>
            </div>
            <div className="navbar--part right">
                <ul>
                    {/* <li><a href="/profile">Profile</a></li> stex profili nkar pen kare ini bayc xuyevo profile ini vobshe ta che*/}
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </nav>

        // <nav className="navbar"> {/* not logged in*/}
        //     <div className="navbar--part left">
        //         <ul>
        //             <li><a href="/">Home</a></li>
        //             <li><a href="/categories">Categories</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar--part right">
        //         <ul>
        //             <li><a href="/login">Login</a></li>
        //             <li><a href="/signup">Sign up</a></li>
        //         </ul>
        //     </div>
        // </nav>
    );
}
