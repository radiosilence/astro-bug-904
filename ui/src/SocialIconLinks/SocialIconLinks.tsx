import React, { forwardRef, ImgHTMLAttributes } from "react";
import Facebook1x from "./images/facebook/facebook.png";
import Facebook2x from "./images/facebook/facebook@2x.png";
import Facebook3x from "./images/facebook/facebook@3x.png";
import Instagram1x from "./images/instagram/instagram.png";
import Instagram2x from "./images/instagram/instagram@2x.png";
import Instagram3x from "./images/instagram/instagram@3x.png";
import Twitter1x from "./images/twitter/twitter.png";
import Twitter2x from "./images/twitter/twitter@2x.png";
import Twitter3x from "./images/twitter/twitter@3x.png";
import Youtube1x from "./images/youtube/youtube.png";
import Youtube2x from "./images/youtube/youtube@2x.png";
import Youtube3x from "./images/youtube/youtube@3x.png";

export interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  sources: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ sources = [], children, ...rest }, ref) => {
    const srcSet = [...Array(sources.length)]
      .map((_, index) => `${sources[index]} ${index + 1}x`)
      .join(", ");

    return <img src={sources[0]} srcSet={srcSet} ref={ref} {...rest} />;
  }
);

interface IconLink {
  className?: string;
}

export interface IconLinkUsernameProp extends IconLink {
  username: string;
}

export interface IconLinkChannelNameProp extends IconLink {
  channelName: string;
}

export function FacebookIconLink({
  username,
  className,
}: IconLinkUsernameProp): JSX.Element {
  return (
    <a
      href={`https://www.facebook.com/${username}`}
      target="_blank"
      className={className}
    >
      <Image
        sources={[Facebook1x, Facebook2x, Facebook3x]}
        style={{ width: "28px" }}
      />
    </a>
  );
}

export function TwitterIconLink({
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

export function InstagramIconLink({
  username,
  className,
}: IconLinkUsernameProp): JSX.Element {
  return (
    <a
      href={`https://instagram.com/${username}`}
      target="_blank"
      className={className}
    >
      <Image
        sources={[Instagram1x, Instagram2x, Instagram3x]}
        style={{ width: "28px" }}
      />
    </a>
  );
}

export function YouTubeIconLink({
  channelName,
  className,
}: IconLinkChannelNameProp): JSX.Element {
  return (
    <a
      href={`https://youtube.com/${channelName}`}
      target="_blank"
      className={className}
    >
      <Image
        sources={[Youtube1x, Youtube2x, Youtube3x]}
        style={{ width: "28px" }}
      />
    </a>
  );
}
