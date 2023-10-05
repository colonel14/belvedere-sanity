import { defineField, defineType } from "sanity";
import { BringToFront } from "lucide-react";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: BringToFront,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
