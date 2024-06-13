import {  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Question, List, Fire, Triangle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

// IMAGENS
import alterra2 from "./assets/imgs/alterra2.png" 

export default function Navbar() {
  return (
    <>
      <header className="bg-black w-full flex h-14">
        <div className="w-1/2 text-white flex items-center justify-center text-2xl">
          <Link className="flex items-center justify-center" to="/"><img className="navbar-img" src={alterra2} alt="" /></Link>
        </div>
        <nav className="w-1/2 flex justify-end items-center gap-1 mr-5">
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/about"><Button>About</Button></Link>
          <Link to="/enlist"><Button>Enlist</Button></Link>
          <Link to="/alterra"><Button>Alterra</Button></Link>
        </nav>
      </header>
    </>
  );
}
