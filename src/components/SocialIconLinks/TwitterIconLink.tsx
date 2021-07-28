import React, { ImgHTMLAttributes } from "react";
import Twitter1x from "./images/twitter/twitter.png";
import Twitter2x from "./images/twitter/twitter@2x.png";
import Twitter3x from "./images/twitter/twitter@3x.png";

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  sources: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Image = ({
  sources = [],
  children,
  ...rest
}: ImageProps): JSX.Element => {
  const srcSet = [...Array(sources.length)]
    .map((_, index) => `${sources[index]} ${index + 1}x`)
    .join(", ");

  return <img src={sources[0]} srcSet={srcSet} {...rest} />;
};

interface IconLink {
  className?: string;
}

export interface IconLinkUsernameProp extends IconLink {
  username: string;
}

export interface IconLinkChannelNameProp extends IconLink {
  channelName: string;
}

export default function TwitterIconLink({
  username,
  className,
}: IconLinkUsernameProp): JSX.Element {
  return (
    <a
      href={`https://twitter.com/${username}`}
      target="_blank"
      className={className}
    >
      <Image
        sources={[Twitter1x, Twitter2x, Twitter3x]}
        style={{ width: "28px" }}
      />
    </a>
  );
}
