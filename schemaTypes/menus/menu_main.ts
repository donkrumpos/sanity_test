import {MenuIcon} from '@sanity/icons'
import {defineType, defineField, defineArrayMember} from 'sanity'
import _slug from '../fields/_slug'
import _title from '../fields/_title'
import _link from '../fields/_link'

export default defineType({
  title: 'Main Menu',
  name: 'menu_main',
  type: 'document',
  icon: MenuIcon,
  description: 'Management for the primary navigation',
  preview: {
    select: {
      lang: 'language',
      items: 'nav_items',
    },
    prepare(selection) {
      const {lang, items} = selection
      const title = 'Main Menu'
      const sub = `${lang} | ${items?.length ? items.length : '0'} Items`

      return {
        title: title,
        subtitle: sub,
      }
    },
  },
  fields: [
    defineField({
      title: 'Nav Items',
      name: 'nav_items',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Nav Item',
          name: 'nav_item',
          type: 'object',
          fieldsets: [
            {
              title: 'Concluding Link',
              name: 'concluding_link',
              options: {
                collapsible: true,
                collapsed: false,
              },
            },
            {
              title: 'Image CTA',
              name: 'image_cta',
              options: {
                collapsible: true,
                collapsed: false,
              },
            },
          ],
          fields: [
            defineField({
              title: 'Nav Item Name',
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            _link({
              title: 'Nav Item Link',
              name: 'link',
              validation: (Rule) => Rule.optional(),
            }),
            defineField({
              title: 'Nav Panel',
              name: 'nav_panel',
              type: 'array',
              validation: (Rule) => Rule.max(5),
              of: [
                {
                  title: 'Nav List Item',
                  // name: 'nav_entry',
                  type: 'object',
                  fields: [
                    {
                      title: 'Icon',
                      name: 'icon',
                      type: 'card_icon',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Name',
                      name: 'name',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    _link({title: 'Link', name: 'link', validation: (Rule) => Rule.required()}),
                    {
                      title: 'Description',
                      name: 'description',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Children',
                      name: 'children',
                      type: 'array',
                      of: [{type: 'menu_link'}],
                      validation: (Rule) => Rule.max(9),
                    },
                  ],
                },
              ],
            }),
            defineField({
              title: 'Text',
              name: 'concluding_link_text',
              type: 'string',
              fieldset: 'concluding_link',
            }),
            _link({
              title: 'Link',
              name: 'concluding_link_url',
              validation: (Rule) => Rule.optional(),
              fieldset: 'concluding_link',
            }),
            defineField({
              title: 'Image',
              name: 'cta_image',
              type: 'picture',
              fieldset: 'image_cta',
            }),
            _link({
              title: 'Link',
              name: 'cta_link',
              validation: (Rule) => Rule.optional(),
              fieldset: 'image_cta',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Contact CTA',
      name: 'contact_cta',
      type: 'menu_link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Primary CTA',
      name: 'primary_cta',
      type: 'menu_link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Secondary CTA',
      name: 'secondary_cta',
      type: 'menu_link',
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
