import {defineField} from 'sanity'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Teaser',
        name: 'description',
        type: 'text',
        description:
          'Used as internal summary/teaser text in automated cross-site promotions. Should be 150 characters or less. (Ex: Featured content blocks)',
        validation: (Rule) => Rule.required(),
      },
      options
    )
  )
}
