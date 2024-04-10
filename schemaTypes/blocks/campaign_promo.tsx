import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Campaign Promo',
  name: 'campaign_promo',
  type: 'object',
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'title.text',
      image: 'image',
    },
    prepare(selection) {
      const {title, image} = selection
      const imgUrl = getPictureUrl(image)
      const media = imgUrl ? <img src={imgUrl} /> : null
      return {
        title: title,
        subtitle: 'Campaign Promo',
        media,
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
      type: 'theme_bluePurple',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title'},
    _anchor_id(),
    {title: 'Subtitle', name: 'subtitle', type: 'title'},
    {title: 'Image', name: 'image', type: 'picture'},
    {title: 'Concluding Link', name: 'concluding_link', type: 'link'},
    {title: 'Body', name: 'body', type: 'full_text'},
  ],
})
