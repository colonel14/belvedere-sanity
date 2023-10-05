import Image from "next/image";
import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { cn } from "@/lib/utils";
import urlFor from "@/lib/urlFor";

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={urlFor(value)}
      alt={value.alt || "Image"}
      loading="lazy"
      className="object-cover"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

const PortableTextTable = ({ value }) => {
  const [head, ...rows] = value.table.rows;

  return (
    <table>
      {head.cells.filter(Boolean).length > 0 && (
        <thead>
          <tr>
            {head.cells.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.cells.map((cell, index) => {
              return <td key={cell}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const components = {
  types: {
    image: ImageComponent,

    tables: PortableTextTable,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg py-10 font-bold">{children}</h4>
    ),
    normal: ({ children }) => <p className="page__text">{children}</p>,
  },
  blockquote: ({ children }) => (
    <blockquote className="border-r-yellow border-l-4 pr-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => (
      <span className="font-bold text-blue-500">{props.children}</span>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noopener" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return <Link href={`/post/${value?.slug?.current}`}>{children}</Link>;
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
};
// Set up Portable Text serialization
export const PortableText = (props) => (
  <PortableTextComponent components={components} {...props} />
);
