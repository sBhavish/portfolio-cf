import github from "app/images/github-dark.svg"
import twitter from "app/images/twitter-dark.svg"
import linkedin from "app/images/linkedin-dark.svg";

export default function FooterComponent() {
    return (
        <footer className="mt-10 justify-center gap-2 text-center text-sm print:hidden md:mt-20 font-sans pb-2">
            <div className="m-auto flex justify-center gap-4">
                <a className="p-2" href="https://www.linkedin.com/in/bhavish-s/" target="_blank" rel="noreferrer">
                    <img alt="Follow me on LinkedIn" className="footer-social" height="16" loading="lazy" src={linkedin} width="16" />
                </a>
                <a className="p-2" href="https://github.com/sBhavish" target="_blank" rel="noreferrer">
                    <img alt="Follow me on GitHub" className="footer-social" height="16" loading="lazy" src={github} width="16" />
                </a>
                {/* <a className="p-2" href="" target="_blank" rel="noreferrer">
                    <img alt="Follow me on Twitter" className="footer-social" height="16" loading="lazy" src={twitter} width="16" />
                </a> */}
            </div>
            <p className="font-monospace">Built with <span className="text-color-primary--">♥</span> in <a href="https://www.google.com/search?q=bengaluru+weather" className='text-red-600' rel="noreferrer" target="_blank">Bangalore</a>, India.</p>
        </footer>
    );
}