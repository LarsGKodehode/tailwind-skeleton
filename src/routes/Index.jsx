// Libraries
import {
  NavLink,
  Outlet,
} from "react-router-dom"
import Collapsable from "../components/Collapsable/Collapsable";

function Index() {
  return (
    <div
      // Tailwind uses premade CSS classNames for styling see Cheat Sheat for a list of handy ones
      className="h-screen flex flex-col p-4"
    >
      <header>
        <h1>This persist across pages</h1>
        <Collapsable
          className="p-2 rounded-md hover:bg-gray-300"
          activeClass="bg-green-400"
          disabledClass="bg-red-500"
        >
          <h2>Links</h2>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/ExampleRoute">Example</NavLink></li>
          </ul>
        </Collapsable>
      </header>

      <main
        className="flex-grow content-center"
      >
        <Outlet />
      </main>

      <footer>
        <h1>This persist as well</h1>
      </footer>
    </div>
  )
};

export default Index;