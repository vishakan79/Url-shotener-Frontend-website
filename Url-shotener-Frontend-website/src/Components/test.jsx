<div className="dashboard">
    <header>
        <nav>
            <div className="top-navbar">
                <div className="user-details">
                    <div className="img">
                        <i className='bx bxs-user'></i>
                    </div>
                    <p>Balamurugan A</p>
                    <div className="drop-down">
                        <i class='bx bxs-down-arrow' ></i>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <aside>
        <nav>
            <div className="side-navbar">
                <div className="create-link-menu content">
                    <div className="logo">
                        <h1 className='d-flex align-items-center'><i className='bx bx-link'></i>One Click</h1>
                    </div>
                    <button className='create-link'>Create new</button>
                </div>
                <div className="content">
                    <div className="menu-btn clicked-menu-btn">
                        <i class='bx bx-home'></i> Home
                    </div>
                    <div className="menu-btn">
                        <i class='bx bx-link'></i> Links
                    </div>
                </div>
            </div>
        </nav>
    </aside>

    <main>
        <Outlet />
    </main>
</div>