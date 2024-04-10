import {ClipboardIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'WhistleB Signup Form',
  name: 'whistleb_signup',
  type: 'object',
  icon: ClipboardIcon,
  preview: {
    select: {
      title: 'title.text',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'WhistleB Form',
      }
    },
  },
  fields: [
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
      title: 'Marketo Form ID',
      name: 'marketo_form_id',
      type: 'number',
    }),
    defineField({
      title: 'Success Message',
      name: 'success',
      type: 'full_text',
    }),
  ],
})
