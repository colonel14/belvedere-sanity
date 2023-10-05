import { defineField, defineType } from "sanity";
import { LayoutGrid } from "lucide-react";
export default defineType({
  name: "grid",
  title: "Grid",
  type: "object",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Subjects Grid",
      readOnly: true,
    }),
    defineField({
      name: "columnsCount",
      title: "Columns Count",
      type: "number",
    }),
    defineField({
      name: "gridList",
      title: "Grid List",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Grid Item",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "color",
              title: "Background Color",
              type: "color",
            }),
          ],
        }),
      ],
    }),
  ],
  initialValue: {
    sectionTitle: "Subject Grid",
  },
});
