import Image from "next/image";
import logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-12 py-1 flex justify-between">
        <span>
          {" "}
          <Image src={logo} alt="logo" quality={100} width={70} />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
