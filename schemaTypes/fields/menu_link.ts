import {defineType} from 'sanity'
import {PAGE_TYPES} from '../../constants'
import _link from './_link'

export default defineType({
  title: 'Menu Link',
  name: 'menu_link',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {title: 'Menu item copy', name: 'name', type: 'string', validation: (Rule) => Rule.required()},
    _link({
      title: 'Menu item link',
      name: 'link',
    }),
    {title: 'Open in new tab', name: 'new_tab', type: 'boolean', initialValue: false},
  ],
})
