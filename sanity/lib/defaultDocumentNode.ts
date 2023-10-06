// ./nextjs-app/sanity/desk/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(page: any) {
  return page?.slug?.current
    ? `${window.location.host}/${page.slug.current}`
    : window.location.host;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            // url: `http://localhost:3000/api/preview`,
            url: (page: any) => getPreviewUrl(page),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
