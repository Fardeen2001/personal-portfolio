import Image from "next/image";
import logo from "@/public/logo.png";
import { RANKTRAQ_WEBSITE_URL } from "@/data/rankTraq";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-12 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>
          <Image src={logo} alt="logo" quality={100} width={70} />
        </span>
        <p className="text-[#ADB7BE] text-sm">
          Featured project:{" "}
          <a
            href={RANKTRAQ_WEBSITE_URL}
            rel="noopener"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4"
          >
            Rank Traq
          </a>{" "}
          — Google rank tracker with AI Overviews
        </p>
        <p className="text-slate-600 text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
