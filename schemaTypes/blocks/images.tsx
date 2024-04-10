import {ImagesIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _theme from '../style_variations/_theme'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Images',
  name: 'images',
  type: 'object',
  icon: ImagesIcon,
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      const sub = `Images | ${items?.length ? items.length : '0'} Items`

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
    _theme({
      options: {
        list: [
          {value: 'primary', title: 'White (Primary)'},
          {value: 'secondary', title: 'Glacier (Secondary)'},
        ],
      },
    }),
    defineField({
      title: 'Marquee Scroll',
      name: 'marquee',
      type: 'boolean',
      initialValue: false,
      description:
        'If selected, images will horizontally scroll across the entire width of the page. Requires at least 7 images to activate.',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    // defineField({
    //   title: 'Button',
    //   name: 'concluding_link',
    //   type: 'link',
    // }),
    defineField({
      title: 'Images',
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Image',
          name: 'item',
          type: 'object',
          preview: {
            select: {
              image: 'image',
            },
            prepare(selection) {
              const {image} = selection

              const title = image?.alt
                ? image.alt
                : image?.file?.secure_url
                ? image.file.secure_url
                : ''
              return {
                title,
              }
            },
          },
          fields: [
            {title: 'Image', name: 'image', type: 'picture', validation: (Rule) => Rule.required()},
            // {title: 'Card Title', name: 'title', type: 'string', validation: (Rule) => Rule.required()},
            // {title: 'Card Body', name: 'body', type: 'full_text', validation: (Rule) => Rule.required()},
            // {title: 'Card Link', name: 'link', type: 'link', validation: (Rule) => Rule.required()},
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1).max(24),
    }),
  ],
})
