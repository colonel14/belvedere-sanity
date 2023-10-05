import Image from "next/image";
import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { cn } from "@/lib/utils";

const components = {
  block: {
    p: ({ children }) => <p>{children}</p>,
  },
};
// Set up Portable Text serialization
export const PortableHeading = (props) => (
  <PortableTextComponent components={components} {...props} />
);
