import { groq } from "next-sanity";

export const allProducts = groq`*[_typeof == product]`;

export const threeProducts = groq`*[_type == "product"][0..2]`;
