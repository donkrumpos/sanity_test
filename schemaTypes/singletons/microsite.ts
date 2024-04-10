import {InlineElementIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Microsite Form',
  name: 'microsite',
  type: 'document',
  icon: InlineElementIcon,
  preview: {
    select: {
      title: 'form.title',
      form_id: 'form.form_id',
      lang: 'language',
    },
    prepare(selection) {
      const {title, form_id, lang} = selection

      return {
        title: 'Microsite',
        subtitle: `${lang ? lang + ' | ' : ''}Form ID: ${form_id}`,
      }
    },
  },
  fields: [
    defineField({
      title: 'Form',
      name: 'form',
      type: 'marketo_form',
      options: {
        collapsed: false,
      },
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
