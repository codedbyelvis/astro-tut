import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        pubDate: fields.date({ label: 'Publish Date',
            defaultValue: { kind: 'today' },
         }),
        description: fields.text({ label: 'Description' }),
        author: fields.text({ label: 'Author',
            defaultValue: 'Astro Learner',
         }),
        image: fields.object({
          url: fields.text({ label: 'Image URL',
            defaultValue: 'https://docs.astro.build/default-og-image.png'
           }),
          alt: fields.text({ label: 'Image Alt Text',
            defaultValue: 'The word astro against an illustration of planets and stars.'
           }),
        }),
        tags: fields.array(fields.text({ label: 'Tag',
            defaultValue: 'astro',
         }), {
          label: 'Tags',
          itemLabel: props => props.value,
        }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
});