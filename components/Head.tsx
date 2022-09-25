import { FC } from "react";
import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
  keywords: string;
  author: string;
  date: string;
  url: string;
  image: string;
}

const Head: FC<Props> = ({
  title,
  description,
  keywords,
  author,
  date,
  url,
  image,
}) => {
  return (
    <>
      <NextHead>
        <meta key="charSet" charSet="UTF-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta key="httpEquiv" httpEquiv="x-ua-compatible" content="ie=edge" />

        {title && <meta key="title" name="title" content={title} />}
        {description && (
          <meta key="description" name="description" content={description} />
        )}
        {keywords && <meta key="keywords" name="keywords" content={keywords} />}
        {author && <meta key="author" name="author" content={author} />}

        {date && (
          <meta
            key="article:published_time"
            property="article:published_time"
            content={date}
          />
        )}

        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta key="og:type" property="og:type" content="website" />
        {url && <meta key="og:url" property="og:url" content={url} />}

        {image && <meta key="og:image" property="og:image" content={image} />}
        {image && <meta key="image" property="image" content={image} />}
        {image && (
          <meta key="og:image:width" property="og:image:width" content="1200" />
        )}
        {image && (
          <meta
            key="og:image:height"
            property="og:image:height"
            content="630"
          />
        )}

        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@timtbdev"
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={title ? `${title}` : "Tim | Android Developer"}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        {image && (
          <meta key="twitter:image" name="twitter:image" content={image} />
        )}

        {url && <link key="canonical" rel="canonical" href={url} />}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f0f0f" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title key="pageTitle">
          {title ? `${title}` : "Tim | Android Developer"}
        </title>
      </NextHead>
    </>
  );
};
export default Head;
