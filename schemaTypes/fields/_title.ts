import {defineField} from 'sanity'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Page title',
        name: 'title',
        type: 'string',
        description:
          'Page title up to 55 characters. Default page title and breadcrumb. Also used as title teaser text in automated cross-site promotions. (Ex: Featured content blocks) Also used as social share title.\n"| NAVEX" is appended at the end of this field for page title/schema only.',
        validation: (Rule) => Rule.required(),
      },
      options
    )
  )
}
