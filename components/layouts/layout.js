import NavigationBar from './navigation-bar';

const Layout = props => {
    return (
        <>
        <header>
            <NavigationBar />
        </header>
        <main className='mx-4 my-3 md:mx-8 md:my-5 lg:mx-12'>
            {props.children}
        </main>
        <footer>
            
        </footer>
        </>
    );
};

export default Layout;
