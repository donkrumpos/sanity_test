import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Partners List',
  name: 'partners',
  type: 'object',
  icon: UsersIcon,
  preview: {
    select: {
      title: 'title.text',
      items: 'partners',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Partners | ${items?.length ? items.length : '0'} Items`

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
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Image Size',
      name: 'image_size',
      type: 'string',
      options: {
        list: ['normal', 'large'],
      },
      initialValue: 'normal',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Partners',
      name: 'partners',
      type: 'array',
      validation: (Rule) => Rule.max(60),
      of: [
        {
          name: 'item',
          type: 'object',
          preview: {
            select: {
              title: 'title',
              image: 'image',
              url: 'partners_link',
            },
            prepare(selection) {
              const {title, image, url} = selection
              const imgUrl = getPictureUrl(image)
              const media = imgUrl ? <img src={imgUrl} /> : null

              return {
                title,
                subtitle: url?.current,
                media,
              }
            },
          },
          fields: [
            defineField({
              title: 'Name',
              name: 'title',
              type: 'string',
            }),
            defineField({
              title: 'Partner Site URL',
              name: 'partners_link',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: true}),
            }),
            defineField({
              title: 'Image',
              name: 'image',
              type: 'picture',
            }),
            defineField({
              title: 'Body',
              name: 'body',
              type: 'full_text',
            }),
          ],
        },
      ],
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
