import {ImagesIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Image List',
  name: 'image_list',
  type: 'object',
  icon: ImagesIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'images',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Image List | ${items?.length ? items.length : '0'} Items`

      return {
        title: title,
        subtitle: sub,
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
      type: 'theme_greenGreigeWhite',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'picture'}],
    }),
    defineField({
      title: 'Text Link',
      name: 'text_link',
      type: 'full_text',
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
