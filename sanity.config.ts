'use client';

/**
 * This configuration is used for the Sanity Studio mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // Use `deskTool` instead of `structureTool`

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { structure } from './sanity/structure'; // You can still define custom structures if needed
import { markdownSchema } from 'sanity-plugin-markdown';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    deskTool({
      structure, // Custom structure defined in `./sanity/structure`
    }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
  ],
});
