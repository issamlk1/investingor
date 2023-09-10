import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemes from "./sanity/schemes";


const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    title:  process.env.NEXT_PUBLIC_SANITY_TITLE,
    apiVersion:  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    basePath: '/cc',
    plugins: [deskTool()],
    schema: {types:schemes},
    useCdn: false,
});

export default config;