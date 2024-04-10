import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Title',
  name: 'title',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fieldsets: [
    {
      title: 'Options',
      name: 'options',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'text',
      type: 'string',
    }),
    defineField({
      title: 'Content Level',
      name: 'heading_level',
      type: 'string',
      options: {
        list: [
          {value: '1', title: 'H1'},
          {value: '2', title: 'H2'},
          {value: '3', title: 'H3'},
          {value: '4', title: 'H4'},
          {value: '5', title: 'H5'},
          {value: '6', title: 'H6'},
        ],
      },
      initialValue: '3',
      fieldset: 'options',
    }),
    defineField({
      title: 'Visual Heading Level',
      name: 'visual_heading_level',
      type: 'string',
      options: {
        list: [
          {value: '1', title: 'H1'},
          {value: '2', title: 'H2'},
          {value: '3', title: 'H3'},
          {value: '4', title: 'H4'},
          {value: '5', title: 'H5'},
          {value: '6', title: 'H6'},
        ],
      },
      initialValue: '3',
      fieldset: 'options',
    }),
  ],
})
