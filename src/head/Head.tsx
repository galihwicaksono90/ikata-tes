import Header from "next/head";
import meta, { HeadProps } from "meta";

const Head = ({ title, page }: HeadProps) => {
  return (
    <Header>
      {!title ? (
        <>
          <title>{meta[page]?.title ?? ""}</title>
          <meta property="og:title" content={meta[page]?.title ?? ""} />
        </>
      ) : (
        <>
          <title>{`${meta[page]?.title} | ${title}`}</title>
          <meta
            property="og:title"
            content={`${meta[page]?.title} | ${title}`}
          />
        </>
      )}
      <meta name="keywords" content={meta[page]?.keywords ?? ""} />
      <meta name="description" content={meta[page]?.description ?? ""} />
      <meta property="og:url" content="https://ikataupn.or.id" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={meta[page]?.description ?? ""} />
    </Header>
  );
};

export default Head;
