import React from "react";

import { Link } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lead from "./components/Lead";
import Profilepage from "./components/Profilepage";

 function Navbar() {
  return (
    <div>
      <div className="flex w-screen justify-center bg-[#64748b] text-white font-bold    text-xs p-2">
        <div className="flex gap-x-[20px] ">
        <Link to="/" className="navbar">Home</Link>
          <Link to="/" className="navbar">Leads</Link>
          <Link to="/" className="navbar">Contacts</Link> <Link to="/" className="navbar">Accounts</Link>
          <Link to="/" className="navbar">Tasks</Link>
          <Link to="/" className="navbar">Meatings</Link>
          <Link to="/" className="navbar">Calls</Link>
          <Link to="/" className="navbar">Reports</Link>
          <Link to="/" className="navbar">Analytics</Link>
          <Link to="/" className="navbar">Products</Link>
          <Link to="/" className="navbar">Quotes</Link> <Link to="/" className="navbar">Sales orders</Link>
          <Link to="/" className="navbar">Purchase orders</Link>
          <Link to="/">
         
            <i class="bi bi-three-dots"></i>
          </Link>
        </div>
        <div className=" flex gap-[15px] m1-6">
       
          <select className="bg-[#64748b] border-none">
         
            <option value="">All tabs</option>
          </select>
          <Link>
            <i class="bi bi-search"></i>
          </Link>
          <Link>
            <i class="bi bi-plus-lg"></i>
          </Link>
          <Link>
            <i class="bi bi-cloud-arrow-down"></i>
          </Link>
          <Link>
            <i class="bi bi-calendar3"></i>
          </Link>
          <Link>
            <i class="bi bi-archive"></i>
          </Link>
          <Link>
            <i class="bi bi-bell"></i>
          </Link>
          <Link>
            <i class="bi bi-gear"></i>
          </Link>
          <Link>
            <i class="bi bi-person-circle"></i>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Lead></Lead>}></Route>

          <Route path="/profile" element={<Profilepage></Profilepage>}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Navbar;
