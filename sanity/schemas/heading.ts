import { defineField, defineType } from "sanity";
import { Heading } from "lucide-react";
export default defineType({
  name: "heading",
  title: "Heading",
  type: "object",
  icon: Heading,
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Heading",
      readOnly: true,
    }),
    defineField({
      name: "headingTitle",
      title: "Heading Title",
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
      name: "headingTitleColor",
      title: "Title Color",
      type: "color",

      options: {
        disableAlpha: true,
        colorList: [
          "#C33734",
          "#44508D",
          "#FF9BC2",
          "#65D2DE",
          "#FFB842",
          "#6AC45B",
          "#2B52AA",
          "#FB491C",
          "#046A38",
          "#0F213F",
          "#F5F7F9",
        ],
      },
    }),
    defineField({
      name: "headingSubtitle",
      title: "Heading Subtitle",
      type: "string",
    }),
    defineField({
      name: "headingSubtitleColor",
      title: "Subtitle Color",
      type: "color",

      options: {
        disableAlpha: true,
        colorList: [
          "#C33734",
          "#44508D",
          "#FF9BC2",
          "#65D2DE",
          "#FFB842",
          "#6AC45B",
          "#2B52AA",
          "#FB491C",
          "#046A38",
          "#0F213F",
          "#F5F7F9",
        ],
      },
    }),
  ],
});
