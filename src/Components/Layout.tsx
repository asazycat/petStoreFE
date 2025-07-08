import { Link, Outlet } from "react-router-dom";

export default function Layout() {
     return (
    <div>
    <header className="bg-purple-500 flex justify-between">
        <h1 className="">PetFinders</h1>
                 <nav className="flex justify-around w-1/2">
                     <Link to="/">Homepage</Link>
                     <Link to="/pets">Pets</Link>
                     <Link to="/organizations">Organizations</Link>
                </nav>         
    </header>
    <main>
    <Outlet /> 
    </main>
    <footer>
                 
    </footer>
    </div>
  );
}