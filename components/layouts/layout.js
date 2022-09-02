import Footer from './footer';
import NavigationBar from './navigation-bar';

const Layout = props => {
    return (
        <>
        <header className='fixed w-full z-50 top-0 left-0'>
            <NavigationBar />
        </header>
        <main role={"main"}>
            {props.children}
        </main>
        <footer>
            <Footer />
        </footer>
        </>
    );
};

export default Layout;
