import {ClipboardIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Marketo Form',
  name: 'marketo_form',
  type: 'object',
  icon: ClipboardIcon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      title: 'title',
      id: 'form_id',
      lang: 'language',
    },
    prepare(selection) {
      const {title, id, lang} = selection
      const sub = `${lang ? lang : ''} | Form ID: ${id ? id : ''}`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({title: 'Form ID', name: 'form_id', type: 'number'}),
    defineField({title: 'Form Title', name: 'title', type: 'string'}),
    defineField({title: 'Form Message', name: 'message', type: 'full_text'}),
    defineField({title: 'Success Message', name: 'success_message', type: 'full_text'}),
    defineField({title: 'Button Text', name: 'button_text', type: 'string'}),
  ],
})
