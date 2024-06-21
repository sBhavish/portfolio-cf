import { NavLink } from "@remix-run/react";

export default function Nav() {
    return (
        <nav className="flex h-full font-mono">
            <NavLink prefetch="intent" aria-current="page" className="header-link" to="/">About</NavLink>
            <NavLink prefetch="intent" className="header-link" to="/blog">Blog</NavLink>
            <NavLink prefetch="intent" className="header-link" to="/portfolio">Portfolio</NavLink>
            <NavLink prefetch="intent" className="header-link" to="/resume">Resume</NavLink>
            <NavLink prefetch="intent" className="header-link" to="/contact">Contact</NavLink>
        </nav>

    );
}