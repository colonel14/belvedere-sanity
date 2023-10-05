import { defineField, defineType } from "sanity";
import { AreaChart } from "lucide-react";
export default defineType({
  name: "learningAreas",
  title: "Learning Areas",
  type: "object",
  icon: AreaChart,
  fields: [
    defineField({
      name: "areaTitle",
      title: "Area Title",
      type: "string",
    }),
    defineField({
      name: "areaList",
      title: "Area List",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Area Item",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
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
});
