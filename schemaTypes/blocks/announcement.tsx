import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Announcement',
  name: 'announcement',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection) {
      const {items} = selection
      const title = items?.map((item: any) => item.title.text).join(', ')
      const sub = `Announcement | ${items?.length ? items.length : '0'} Items`

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
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    _anchor_id(),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Item',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              title: 'title.text',
              image: 'image',
              wistia: 'wistia_id',
            },
            prepare(selection) {
              const {title, image, wistia} = selection
              const sub = `${wistia ? 'Wistia ID: ' + wistia : ''}`
              const imgUrl = getPictureUrl(image)
              const media = imgUrl ? <img src={imgUrl} /> : null
              return {
                title,
                subtitle: sub,
                media,
              }
            },
          },
          fields: [
            {title: 'Title', name: 'title', type: 'title', description: 'Hard-coded to H2'},
            {title: 'Body', name: 'body', type: 'full_text'},
            {title: 'Image', name: 'image', type: 'picture'},
            {title: 'Wistia Video ID', name: 'wistia_id', type: 'string'},
            {name: 'concluding_link', type: 'link'},
          ],
        }),
      ],
    }),
  ],
})
