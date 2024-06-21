import Logo from "~/icons/logo";
import Nav from "./Nav";
export default function HeaderComponent() {
    return (
        <header className="header overflow-hidden print:hidden">
            <Logo/>
            <Nav/>
        </header>
    );
}