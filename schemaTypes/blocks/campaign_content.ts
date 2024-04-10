import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Campaign Content',
  name: 'campaign_content',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Campaign Content',
      }
    },
  },
  fieldsets: [
    {
      title: 'Style Variations',
      name: 'style_variations',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title'},
    _anchor_id(),
    defineField({
      title: 'First body',
      name: 'first',
      type: 'full_text',
    }),
    defineField({
      title: 'Second body title & text',
      name: 'second',
      type: 'full_text',
    }),
    defineField({
      title: 'Webinars',
      name: 'webinars',
      type: 'array',
      validation: (Rule) => Rule.max(3),
      of: [{type: 'full_text'}],
    }),
  ],
})
