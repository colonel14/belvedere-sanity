import { defineField, defineType } from "sanity";
import { TextQuote } from "lucide-react";
export default defineType({
  name: "contentText",
  title: "Content",
  type: "object",
  icon: TextQuote,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Content Block",
      readOnly: true,
    }),
    defineField({
      name: "body",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
