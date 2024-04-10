import {defineType} from 'sanity'

export default defineType({
  title: 'Link',
  name: 'link',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {title: 'Button copy', name: 'text', type: 'string'},
    {title: 'Button URL', name: 'url', type: 'string'},
    {title: 'Open in new tab', name: 'new_tab', type: 'boolean', initialValue: false},
  ],
})
