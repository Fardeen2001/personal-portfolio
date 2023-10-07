import gitIcon from "../public/github.svg";
import linkedinIcon from "../public/linkedin.svg";
import twitterIcon from "../public/twitter.svg";
import instagramIcon from "../public/instagram.svg";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-12">
          Let{"'"}s Connect
        </h5>
        <p className="text-[#ADB7E] mb-4 max-w-md">
          I{"'"}m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I{"'"}ll try
          my best to get back to you!
        </p>
        <div className="social flex flex-row gap-2">
          <Link href={"github"}>
            <Image
              src={gitIcon}
              alt="github"
              width={50}
              className="text-white"
            />
          </Link>
          <Link href={"linkedin"}>
            <Image src={linkedinIcon} alt="linkedin" width={50} />
          </Link>
          <Link href={"twitter"}>
            <Image src={twitterIcon} alt="twitter" width={50} />
          </Link>
          <Link href={"instagram"}>
            <Image src={instagramIcon} alt="instagram" width={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Enter Subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Message To Me..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white font-medium hover:bg-purple-600 py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
