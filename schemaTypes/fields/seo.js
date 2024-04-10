import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      title: 'SEO title',
      name: 'title',
      type: 'string',
      description:
        'Page title up to 55 characters. Overrides page title externally only, shows as title in search engine result pages. "| NAVEX" is appended at the end of this field."',
      validation: (Rule) => Rule.warning().max(55),
    }),
    defineField({
      title: 'SEO metadescription',
      name: 'description',
      type: 'string',
      description:
        'Description of the page up to 160 characters. This shows in search engine results and should entice the searcher to click. Also used for social share description. ',
      validation: (Rule) => Rule.warning().max(160),
    }),
    defineField({
      title: 'Social share image',
      name: 'image',
      type: 'picture',
      description:
        'Image used as visual when the page is shared externally. Recommended size is 1200 x 630 px.',
      validation: (Rule) =>
        Rule.custom((field, context) => {
          if (context?.document?._type == 'resource') return true
          return field?.file || field?.url ? true : 'No image file set.'
        }),
    }),
  ],
  validation: (Rule) => Rule.required(),
})
