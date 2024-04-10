import {BlockElementIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Campaign Banner',
  name: 'campaign_banner',
  type: 'object',
  icon: BlockElementIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Campaign Banner',
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
      type: 'theme_greenGreigeBluePurple',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Padding',
      name: 'padding',
      type: 'padding',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title'},
    _anchor_id(),
  ],
})
