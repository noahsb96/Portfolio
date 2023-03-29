import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const config = {
  projectId: "lqz08o01",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
createImageUrlBuilder(config).image(source);