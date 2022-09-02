const Footer = props => {
    return (
        <div className="flex p-4 text-xs items-center justify-center">
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <p className="px-1">UET Tribune</p>
            <p>All Rights Reserved</p>
        </div>
    );
};

export default Footer;
