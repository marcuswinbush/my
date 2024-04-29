import Link from "next/link";


const Footer = () => {
return(
    
    <div className="bg-light-gray justify-center p-5">
        <main className="p-5">
            <div className="footer-section">
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Shop
                </h2>
                <ul className="footer-ul">
                    <li>
                       <span className="hover:underline cursor-pointer"><Link href='/pages/Women'>Women</Link> </span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Men'>Men</Link></span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Unisex'>Unisex</Link></span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Baby'>Baby</Link> </span>
                    </li>

                    <li>
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Kids'>Kids</Link> </span>
                    </li>

                    <li> 
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Sport'>Sport</Link> </span>
                    </li>

                    <li>
                    <span className="hover:underline cursor-pointer"><Link href='/pages/Beauty'>Beauty</Link> </span>
                    </li>
                </ul>
                </nav>
                
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Services
                </h2>
                <ul className="footer-ul">
                    <li>
                      <span className= "hover:underline cursor-pointer">
                      Instagram
                      </span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">
                       LinkedIn
                        </span> 
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">
                        Youtube
                        </span>
                    </li>
                    <li>
                      <span className="hover:underline cursor-pointer">
                      Facebook
                        </span>
                    </li>

                    <li>
                        <span className="hover:underline cursor-pointer">
                        X
                        </span>
                    </li>

                </ul>
                </nav>
                

                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Info
                </h2>
                <ul className="footer-ul">
                    <li>
                       <span className="hover:underline cursor-pointer">Careers</span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">About Us</span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">Investor Relations</span>
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">Privacy Notice</span>
                    </li>

                    <li>
                       <span className="hover:underline cursor-pointer">Cookie Notice</span> 
                    </li>

                    <li> 
                        <span className="hover:underline cursor-pointer">Subscribe</span>
                    </li>

                    <li>
                        <span className="hover:underline cursor-pointer">Contact Us</span>
                    </li>
                </ul>
                </nav>
                
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Help
                </h2>
                <ul className="footer-ul">
                    <li>
                      <span className="hover:underline cursor-pointer">Customer Service </span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">My Account</span> 
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">Find a Store</span> 
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">Report a scam</span>
                    </li>

                </ul>
                </nav>
                
            </div>
            
        </main>
    </div>
);
    
}

export default Footer;