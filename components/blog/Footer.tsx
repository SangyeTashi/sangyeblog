import React from 'react';
import { Sono } from 'next/font/google';
const sono = Sono({ subsets: ['latin'], weight: '700' });
function Footer() {
    return (
        <div className="bg-gray-300">
            copyright@<span className={sono.className}>sangye.dev</span>, 2024
        </div>
    );
}

export default Footer;
