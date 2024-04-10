import {EllipsisHorizontalIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Testimonial',
  name: 'testimonial',
  type: 'object',
  icon: EllipsisHorizontalIcon,
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection) {
      const {items} = selection
      const title = items?.map((item: any) => item.testimonial_details).join(', ')
      const subtitle = `Testimonial | ${items?.length ? items.length : '0'} Items`

      return {
        title,
        subtitle,
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
      title: 'Title',
      name: 'title',
      type: 'title',
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
              body: 'testimonial_text',
              author: 'testimonial_details',
              headshot: 'testimonial_headshot',
              stars: 'star_rating',
              rating: 'rating_text',
            },
            prepare(selection) {
              const {title, body, author, headshot, rating} = selection
              const subtitle = `${rating ? 'Rating:' + rating + ' | ' : ''}${author ? author : ''}`

              const imgUrl = getPictureUrl(headshot)
              const media = imgUrl ? <img src={imgUrl} /> : null

              return {
                title: body ? body : title,
                subtitle,
                media,
              }
            },
          },
          fields: [
            {title: 'Subtitle', name: 'subtitle', type: 'title'},
            {
              title: 'Testimonial Body',
              name: 'testimonial_text',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Testimonial Author',
              name: 'testimonial_details',
              type: 'full_text',
              validation: (Rule) => Rule.required(),
            },
            {title: 'Testimonial Headshot', name: 'testimonial_headshot', type: 'picture'},
            {title: 'Star Rating', name: 'star_rating', type: 'picture'},
            {title: 'Rating Text', name: 'rating_text', type: 'string'},
          ],
        }),
      ],
    }),
  ],
})
