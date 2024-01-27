'use client';
import React, { useEffect } from 'react';
import { Post } from './Post';
import Link from 'next/link';

function PostPreview({ subtitle, date, title, slug }: Post) {
    return (
        <Link
            href={'posts/' + slug}
            className="p-3 border-slate-600 border rounded-md "
        >
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-slate-800">{subtitle}</p>
            <p>{}</p>
        </Link>
    );
}

export default PostPreview;
