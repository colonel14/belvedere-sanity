import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageComponent",
  title: "Image Component",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
