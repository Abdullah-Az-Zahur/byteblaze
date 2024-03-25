import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Bookmarks from '../pages/Bookmarks';

const MainLayout = () => {
    return (
        <div>
            <div className="h16">
                <Navbar></Navbar>
            </div>
            <Home></Home>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
    );
};

export default MainLayout;