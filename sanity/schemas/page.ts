import { defineField, defineType } from "sanity";
import { PanelTop } from "lucide-react";
export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: PanelTop,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "heroImg",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "components",
      title: "Components",
      type: "array",
      of: [
        { title: "Heading", type: "heading" },
        { title: "Features", type: "features" },
        { title: "Content", type: "contentText" },
        { title: "Circles", type: "circles" },
        { title: "Learning Areas", type: "learningAreas" },
        { title: "Grid", type: "grid" },
      ],
    }),
  ],
});
