import {ClipboardImageIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'
import {getPictureUrl} from '../../utils/getPictureUrl'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Campaign Form',
  name: 'campaign_form',
  type: 'object',
  icon: ClipboardImageIcon,
  preview: {
    select: {
      title: 'title.text',
      form_id: 'form.form_id',
      image: 'image',
    },
    prepare(selection) {
      const {title, form_id, image} = selection
      const imgUrl = getPictureUrl(image)
      const media = imgUrl ? <img src={imgUrl} /> : null
      return {
        title: title,
        subtitle: `Campaign Form | Form ID: ${form_id ? form_id : ''}`,
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
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Vertical Alignment',
      name: 'vertical_alignment',
      type: 'vertical_alignment',
      fieldset: 'style_variations',
    }),
    {title: 'Title', name: 'title', type: 'title'},
    _anchor_id(),
    {title: 'Subtitle', name: 'subtitle', type: 'title'},
    {title: 'Body Image', name: 'image', type: 'picture'},
    {title: 'Poster Image', name: 'poster', type: 'picture'},
    {title: 'Body', name: 'body', type: 'full_text'},
    {title: 'Form', name: 'form', type: 'marketo_form'},
  ],
})
