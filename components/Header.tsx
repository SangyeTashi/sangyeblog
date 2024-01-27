import Link from 'next/link';
import React from 'react';
import fs from 'fs';

function Header() {
    return (
        <nav className="bg-slate-800 text-white py-5 flex flex-col items-center">
            <Link href="/">
                <h1 className="text-xl ">Sangye's Blog</h1>
            </Link>

            <p className="text-slate-300">Welcome to WebDev Journal</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li></li>
            </ul>
        </nav>
    );
}

export default Header;
