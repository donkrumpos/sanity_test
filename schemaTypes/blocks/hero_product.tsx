import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Hero - Product',
  name: 'hero_product',
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
        subtitle: 'Hero - Product',
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
      title: 'Content Order',
      name: 'content_order',
      type: 'content_order',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'picture',
    }),
    defineField({
      title: 'Product Icons',
      name: 'icons',
      type: 'array',
      of: [{type: 'product_icon'}],
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
