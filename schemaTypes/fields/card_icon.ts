import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Card Icon',
  name: 'card_icon',
  type: 'string',
  validation: (Rule) => Rule.required(),
  options: {
    list: [
      {title: 'Activity', value: 'activity'},
      {title: 'Alert Circle', value: 'alert-circle'},
      {title: 'Alert Triangle', value: 'alert-triangle'},
      {title: 'Award Ribbon', value: 'award'},
      {title: 'Bar Chart (increasing)', value: 'bar-chart'},
      {title: 'Bar Chart (varied)', value: 'bar-chart2'},
      {title: 'Open Book', value: 'book-open'},
      {title: 'Briefcase', value: 'briefcase'},
      {title: 'Check Circle', value: 'check-circle'},
      {title: 'Clipboard', value: 'clipboard'},
      {title: 'Cloud with Lightning', value: 'cloud-lightning'},
      {title: 'Code Sandbox', value: 'code-sandbox'},
      {title: 'Coffee', value: 'coffee'},
      {title: 'Compass', value: 'compass'},
      {title: 'Crosshair', value: 'crosshair'},
      {title: 'Feather', value: 'feather'},
      {title: 'File', value: 'file'},
      {title: 'Globe', value: 'globe'},
      {title: 'Grid', value: 'grid'},
      {title: 'Help Circle', value: 'help-circle'},
      {title: 'Pen', value: 'pen-tool'},
      {title: 'Refresh', value: 'refresh'},
      {title: 'Send', value: 'send'},
      {title: 'Settings', value: 'settings'},
      {title: 'Share', value: 'share'},
      {title: 'Shield', value: 'shield'},
      {title: 'Sliders', value: 'sliders'},
      {title: 'Trending Up', value: 'trending-up'},
      {title: 'Truck', value: 'truck'},
      {title: 'User', value: 'user'},
      {title: 'Users', value: 'users'},
      {title: 'User Check', value: 'user-check'},
      {title: 'Zap', value: 'zap'},
    ],
  },
  initialValue: 'settings',
})
