import {CaseIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'
import {filterByDocLanguage} from '../../utils/filterByDocLanguage'

export default defineType({
  title: 'Product',
  name: 'product_type',
  type: 'document',
  icon: CaseIcon,
  preview: {
    select: {
      title: 'title',
      image: 'icon',
      lang: 'language',
    },
    prepare(selection) {
      const {title, image, lang} = selection
      const sub = `${lang ? lang + ' | ' : ''}Product Type`
      return {
        title: title,
        subtitle: sub,
        media: (
          <img
            style={{backgroundColor: '#ff4500', transform: 'scale(1.1)'}}
            src={image?.secure_url}
          />
        ),
      }
    },
  },
  fields: [
    defineField({
      title: 'Name',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Icon
    defineField({
      title: 'Icon Image',
      name: 'icon',
      type: 'cloudinary.asset',
      validation: (Rule) => Rule.required(),
    }),
    // Short Label
    // Summary
    // defineField({
    //   title: 'Description',
    //   name: 'summary',
    //   type: 'text',
    //   description: 'A short description of the product to be used in teasers and metadata',
    // }),
    // Main Product Page
    defineField({
      title: 'Main Product Page',
      name: 'page',
      type: 'reference',
      to: [{type: 'page'}],
      options: {filter: filterByDocLanguage},
      description: 'The page that will be linked to when referencing this product.',
    }),
    defineField({
      title: 'Language',
      name: 'language',
      type: 'language',
    }),
  ],
})
