import { defineField, defineType } from "sanity";
import { Circle } from "lucide-react";
export default defineType({
  name: "circles",
  title: "Circles",
  type: "object",
  icon: Circle,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Circles",
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Circles Section Title",
      type: "string",
    }),
    defineField({
      name: "circlesList",
      title: "Circles List",
      type: "array",
      of: [
        defineField({
          name: "circle",
          title: "Circle",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Circle Title",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [],
                  marks: {
                    decorators: [{ title: "Strong", value: "strong" }],
                  },
                },
              ],
            }),
            defineField({
              name: "color",
              title: "Circle Color",
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
