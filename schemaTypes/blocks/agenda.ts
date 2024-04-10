import {ThLargeIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _anchor_id from '../fields/_anchor_id'

export default defineType({
  title: 'Agenda',
  name: 'agenda',
  type: 'object',
  icon: ThLargeIcon,
  preview: {
    select: {
      title: 'title.text',
      sessions: 'sessions',
    },
    prepare(selection) {
      const {title, sessions} = selection
      const sub = `Agenda | ${sessions?.length ? sessions.length : '0'} Sessions`
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
      type: 'theme_allColors',
      fieldset: 'style_variations',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'title',
    }),
    _anchor_id(),
    defineField({
      title: 'Sessions',
      name: 'sessions',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Session',
          name: 'session',
          type: 'object',
          fields: [
            {
              title: 'Track',
              name: 'track',
              type: 'string',
              options: {
                list: [
                  'Keynote',
                  'Corporate Responsibility & Sustainability',
                  'Risk Management & Data',
                  'Corporate Culture',
                ],
              },
            },
            {
              title: 'Time Slot',
              name: 'time',
              type: 'object',
              fields: [
                {title: 'Day', name: 'day', type: 'date', validation: (Rule) => Rule.required()},
                {
                  title: 'Start Time',
                  name: 'start_time',
                  type: 'datetime',
                  options: {dateFormat: '', timeFormat: 'HH:mm', timeStep: 5},
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: 'End Time',
                  name: 'end_time',
                  type: 'datetime',
                  options: {dateFormat: '', timeFormat: 'HH:mm', timeStep: 5},
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {title: 'Title', name: 'title', type: 'string', validation: (Rule) => Rule.required()},
            {title: 'Body', name: 'body', type: 'full_text'},
          ],
        }),
      ],
    }),
  ],
})
