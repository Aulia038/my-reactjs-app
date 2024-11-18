import { useId } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../components/context/UserContext";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-3 bg-[#DB4444] items-center">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" className="w-10 h-10" />
          </Link>
        </li>
        <li className="flex items-center mx-10 justify-center font-serif">
          <Link to="/" className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1]">
            Home
          </Link>
        </li>
      </ul>

      <ul className="flex justify-center items-center font-serif">
        <li className="w-full">
          <input type="text" className="text-black active:text-black focus:text-black px-4 py-2 w-full" name="search" id={inputId} placeholder="Search product..." onChange={handleSearchInput} />
        </li>
      </ul>

      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1] font-serif">
            {/* <Link to="">Sign in</Link> */}
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1] font-serif" to="/singup ">
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <Link className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1] font-serif" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-[#F2F4FF] hover:text-[#702727]  active:text-[#f2a1a1] font-serif">
              My Orders
            </Link>
          </li>
          <li>
            <button onClick={logout} className="text-[#F2F4FF] hover:text-[#702727] active:text-[#f2a1a1] font-serif">
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
