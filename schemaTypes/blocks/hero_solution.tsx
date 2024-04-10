import {BlockContentIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Hero - Solution',
  name: 'hero_solution',
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
        subtitle: 'Hero - Solution',
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
      title: 'Subtitle',
      name: 'subtitle',
      type: 'title',
    }),
    defineField({
      title: 'Product Icons',
      name: 'icons',
      type: 'array',
      of: [defineArrayMember({type: 'product_icon'})],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'picture',
    }),
    defineField({
      title: 'Concluding Link',
      name: 'concluding_link',
      type: 'link',
    }),
  ],
})
