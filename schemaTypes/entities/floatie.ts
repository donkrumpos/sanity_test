import {InlineElementIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Floatie Form',
  name: 'floatie',
  type: 'document',
  icon: InlineElementIcon,
  preview: {
    select: {
      title: 'title',
      form_id: 'form.form_id',
      lang: 'language',
      twoStep: 'two_step',
      opened: 'opened',
    },
    prepare(selection) {
      const {title, form_id, lang, twoStep, opened} = selection
      const sub = `${lang ? lang : ''} | Form ID: ${form_id ? form_id : ''}${
        twoStep ? ' | 2-Step' : ''
      }${opened ? ' | Open' : ''}`

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
      type: 'theme_greenGreige',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Form',
      name: 'form',
      type: 'marketo_form',
    }),
    defineField({
      title: 'Open by default',
      name: 'opened',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: '2-step form',
      name: 'two_step',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
