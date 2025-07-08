import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
export default function Layout() {
     return (
    <div>
    <header className="bg-purple-500 flex justify-between w-auto">
        <h1 className="">PetFinders</h1>
                 <nav className="flex justify-around w-1/2">
                     <Link to="/">Homepage</Link>
                     <Link to="/pets">Pets</Link>
                     <Link to="/organizations">Organizations</Link>
                </nav>         
    </header>
    <main>
     <Suspense  fallback={<p>loading content...</p>}>   
        <Outlet /> 
    </Suspense>
    </main>
    <footer>
                 
    </footer>
    </div>
  );
}