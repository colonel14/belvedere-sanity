import { groq } from "next-sanity";

export const pagequery = groq`
    *[_type == 'page' && title == $title][0] {
    ..., 
  }

`;

export const newsquery = groq`
*[_type == 'post' && $category in categories[]->slug.current] | order(publishedAt desc, _createdAt desc) {
  ..., 
  categories[]->
 }
`;

export const relatedquery = groq`
*[_type == 'post' && $category in categories[]->title] | order(publishedAt desc, _createdAt desc) {
  ..., 
  categories[]->
 }
`;

export const categoryquery = groq`
*[_type == 'category'] | order(publishedAt asc, _createdAt asc) {
  ..., 
 }
`;

export const singlequery = groq`
    *[_type == 'post' && slug.current == $slug][0] {
    ..., 
    categories[]->
  }

`;

export const singleEventQuery = groq`
    *[_type == 'event' && slug.current == $slug][0] {
    ..., 
  }

`;

export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const patheventsquery = groq`
*[_type == "event" && defined(slug.current)][].slug.current
`;
