import {defineField} from 'sanity'
import {PAGE_TYPES} from '../../constants'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default (options: any = []) => {
  return Object.assign(
    {
      title: 'Page link',
      name: 'page_link',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      validation: (Rule) =>
        Rule.custom((context) => {
          if (!context?.pageRef && !context?.url) {
            return 'A reference or URL is required'
          }
          return true
        }),
      fields: [
        {
          title: 'Page reference',
          name: 'pageRef',
          type: 'reference',
          options: {filter: filterByDocLanguage},
          to: PAGE_TYPES.map((page_type) => {
            return {type: `${page_type}`}
          }),
          description:
            'Set the link URL based on a page reference. Strongly recommended to add functionality such as "current page" menu styling, broken link warnings when unpublishing pages, and automatically updating links when a slug changes.',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
          validation: (Rule) => Rule.uri({allowRelative: true}),
        },
      ],
    },
    options
  )
}
