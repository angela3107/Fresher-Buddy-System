import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="nb-header">
            <div className="nb-container">
                <h1>Freshers & Seniors Q&A</h1>
                <nav className="nb-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mentors">Mentors</a></li>
                        <li><a href="/questions">Questions</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;