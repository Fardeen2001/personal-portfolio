"use client";

import ExternalLink from "./ExternalLink";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const FeaturedProjectCard = ({
  title,
  badge = "Featured",
  description,
  highlights,
  techStack,
  images = [],
  websiteUrl,
  websiteLabel = "Visit Website",
  appUrl,
  appLabel = "Open Web App",
  priority = false,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="mt-5 rounded-xl overflow-hidden border border-[#333] bg-[#181818]">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-400 mb-4">
            {badge}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-[#ADB7BE] leading-relaxed mb-5">{description}</p>
          <ul className="space-y-2 mb-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="text-sm text-[#ADB7BE] flex items-start gap-2"
              >
                <span className="text-primary-400 mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#333] bg-[#121212] px-3 py-1 text-xs text-[#ADB7BE]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <ExternalLink
              href={websiteUrl}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
            >
              {websiteLabel}
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </ExternalLink>
            {appUrl && (
              <ExternalLink
                href={appUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-[#444] px-4 py-2 text-sm font-medium text-white hover:border-primary-400 hover:text-primary-400 transition-colors"
              >
                {appLabel}
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </ExternalLink>
            )}
          </div>
        </div>

        {images.length > 0 ? (
          <div className="p-4 md:p-6 bg-[#121212]">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[#333]">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={priority}
              />
            </div>
            <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-video overflow-hidden rounded-md border transition-all ${
                    activeImage === index
                      ? "border-primary-400 ring-1 ring-primary-400"
                      : "border-[#333] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-6 bg-[#121212] flex">
            <ExternalLink
              href={websiteUrl}
              className="group flex w-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-lg border border-[#333] bg-gradient-to-br from-primary-500/20 via-[#181818] to-secondary-500/20 p-6 text-center transition-colors hover:border-primary-400"
            >
              <span className="text-3xl md:text-4xl font-bold text-white">
                {title}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-[#ADB7BE] group-hover:text-primary-400">
                {websiteUrl.replace(/^https?:\/\//, "")}
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </span>
            </ExternalLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
