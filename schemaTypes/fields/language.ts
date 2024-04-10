import {defineType} from 'sanity'

export default defineType({
  // should match 'languageField' plugin configuration setting, if customized
  name: 'language',
  type: 'string',
  readOnly: true,
  hidden: true,
  validation: (Rule) => Rule.required(),
})
