import {defineField} from 'sanity'
import {isValidPagePath} from '../../utils/isValidPagePath'
import {isUniqueSlug} from '../../utils/isUniqueSlug'
import isReservedDocId from '../../utils/isReservedDocId'

export default (options: any = []) => {
  return defineField(
    Object.assign(
      {
        title: 'Slug',
        name: 'path',
        type: 'slug',
        validation: (Rule) => [Rule.custom(isValidPagePath)],
        options: {
          source: 'title',
          maxLength: 255,
          isUnique: isUniqueSlug,
        },
        hidden: isReservedDocId,
        description:
          "The desired URL path for this page. The path may include letters, numbers, hyphens, and forward slashes (e.g., 'about/our-history'). Start without a slash, after the country code. Do not include special characters (&, %, á, ë)  or stop words (the, an, a, etc.)",
      },
      options
    )
  )
}
