import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

  schema: z.object({
    title:        z.string(),
    description:  z.string(),
    pubDate:      z.coerce.date(),
    updatedDate:  z.coerce.date().optional(),
    heroImage:    z.string().optional(),

    category:     z.string(),
    series:       z.string().optional(),
    seriesOrder:  z.number().optional(),
    tags:         z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
