import { defineField, defineType } from "sanity";

export default defineType({
  name: "features",
  title: "Features",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Features",
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Feature Title",
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
    defineField({
      name: "subtitle",
      title: "Feature Subtitle",
      type: "string",
    }),

    defineField({
      name: "featuresList",
      title: "Features List",
      type: "array",
      of: [
        defineField({
          name: "featureBox",
          title: "Feature Box",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Feature Title",
              type: "string",
            }),
            defineField({
              name: "color",
              title: "Number Color",
              type: "color",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
    },
  },
});
