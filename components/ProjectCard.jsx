import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="mt-5">
      <div className="relative group">
        <div
          className="h-52 md:h-72 rounded-t-xl"
          style={{
            backgroundImage: `url(${imgUrl.src})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white text-[#ADB7BE] cursor-pointer group-hover:text-white flex items-center justify-center"
            >
              <CodeBracketIcon className="h-10 w-10" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white text-[#ADB7BE] cursor-pointer group-hover:text-white flex items-center justify-center"
            >
              <EyeIcon className="h-10 w-10" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-2 bg-[#181818] p-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
