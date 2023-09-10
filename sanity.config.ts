import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemes from "./sanity/schemes";


const config = defineConfig({
    projectId: "787xfjrm",
    dataset: "production",
    title:  "investing_tips",
    apiVersion:  "2023-09-06",
    basePath: '/cc',
    plugins: [deskTool()],
    schema: {types:schemes},
    useCdn: false,
});

export default config;