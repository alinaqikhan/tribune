import NavigationBar from './navigation-bar';

const Layout = props => {
    return (
        <>
        <header className='fixed w-full z-50 top-0 left-0'>
            <NavigationBar />
        </header>
        <main className='py-14 mx-4 my-3 md:mx-8 md:my-5 lg:mx-12'>
            {props.children}
        </main>
        <footer>
            
        </footer>
        </>
    );
};

export default Layout;
