import {LaunchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  icon: LaunchIcon,
  preview: {
    select: {
      src: 'source.current',
      dest: 'destination',
    },
    prepare(selection) {
      const {src, dest} = selection
      return {
        title: `From: ${src}`,
        subtitle: `To: ${dest}`,
      }
    },
  },
  fields: [
    defineField({
      title: 'Source',
      name: 'source',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        isUnique: () => true,
      },
      description: 'The site path to redirect from.',
    }),
    defineField({
      title: 'Destination',
      name: 'destination',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({allowRelative: true})
          .custom((url) => {
            if (typeof url === 'undefined') {
              return true
            }

            return url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')
              ? true
              : 'Destination must start with http://, https:// or /'
          }),
      description: 'The URL to redirect to. Must start with http://, https:// or /',
    }),
  ],
})
