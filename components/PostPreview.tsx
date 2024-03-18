'use client';
import React, { useEffect } from 'react';
import moment from 'moment';
import { Post } from './Post';
import Link from 'next/link';


function PostPreview({ subtitle, date, title, slug }: Post) {
    return (
        <Link
            href={'posts/' + slug}
            className="p-3 border-slate-600 border rounded-md  "
        >
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-slate-700">{subtitle}</p>
            <p className="text-slate-700">
                {moment(date).format('MMM DD, YYYY')}
            </p>
        </Link>
    );
}

export default PostPreview;
