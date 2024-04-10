import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Hero - Video',
  name: 'hero_video',
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
        subtitle: 'Hero - Video',
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
    defineField({
      title: 'Content Order',
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Flush',
      name: 'flush',
      type: 'flush',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Vertical Alignment',
      name: 'vertical_alignment',
      type: 'vertical_alignment',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'title',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
    defineField({
      title: 'Product Icon',
      name: 'icon',
      type: 'product_icon',
    }),
    defineField({title: 'Wistia Video ID', name: 'wistia_id', type: 'string'}),
  ],
})
