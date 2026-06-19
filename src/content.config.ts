import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    image: image().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const membersCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    image: image().optional(),
    committees: z.array(z.string()).default([]),
    weight: z.number().default(10),
  }),
});

const topicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(), // Lucide-like icon identifier or SVG name
    summary: z.string(),
    weight: z.number().default(10),
  }),
});

const motionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.enum(['eingereicht', 'beschlossen', 'abgelehnt', 'in_beratung', 'ersetzt']),
    motionId: z.string(), // z.B. "AN-042/2026"
    summary: z.string(),
    documentUrl: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  members: membersCollection,
  topics: topicsCollection,
  motions: motionsCollection,
};
