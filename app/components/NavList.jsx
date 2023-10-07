import { Link } from "react-scroll";

const NavList = ({ href, title }) => {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={-60}
      duration={500}
      className="block py-2 pl-3 pr-4 cursor-pointer text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavList;
