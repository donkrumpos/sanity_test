import {LaunchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Top Banner',
  name: 'top_banner',
  type: 'document',
  preview: {
    select: {
      lang: 'language',
      enabled: 'enabled',
    },
    prepare(selection) {
      const {lang, enabled} = selection
      const sub = `${lang ? lang : ''}${enabled ? ' | Enabled' : ''}`
      return {
        title: 'Top Banner',
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
      type: 'theme_greenGreigeBluePurple',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Body',
      name: 'body',
      type: 'full_text',
    }),
    defineField({
      title: 'Enabled',
      name: 'enabled',
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
