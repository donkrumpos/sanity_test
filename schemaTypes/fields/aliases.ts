import {defineType} from 'sanity'

export default defineType({
  title: 'Redirects',
  name: 'aliases',
  type: 'array',
  of: [{type: 'url', validation: (Rule) => Rule.uri({allowRelative: true, relativeOnly: true})}],
  description:
    "Slugs added here are redirected to this page. Include the language code (i.e. '/en-us/redirect-source') in your redirects.",
})
