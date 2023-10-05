import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import page from "./schemas/page";
import imageComponent from "./schemas/imageComponent";
import heading from "./schemas/heading";
import features from "./schemas/features";
import contentText from "./schemas/contentText";
import circles from "./schemas/circles";
import grid from "./schemas/grid";
import learningAreas from "./schemas/learningAreas";
import event from "./schemas/event";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    event,
    category,
    blockContent,
    page,
    imageComponent,
    heading,
    features,
    contentText,
    circles,
    learningAreas,
    grid,
  ],
};
