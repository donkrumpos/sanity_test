import {defineField} from 'sanity'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Exclude from Search',
        name: 'exclude_from_search',
        type: 'boolean',
        initialValue: false,
        validation: (Rule) => Rule.required(),
      },
      options
    )
  )
}
