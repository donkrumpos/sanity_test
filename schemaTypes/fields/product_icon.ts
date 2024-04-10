import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Product Icon',
  name: 'product_icon',
  type: 'string',

  options: {
    list: [
      {title: 'Third Party Risk Management', value: '3P-monitoring'},
      {title: 'Analytics & Benchmarking', value: 'analytics'},
      {title: 'Business Continuity Management', value: 'business-continuity'},
      {title: 'Conflict Minerals', value: 'cmm'},
      {title: 'Code of Conduct', value: 'code-of-conduct'},
      {title: 'COI Disclosures', value: 'coi-disclosures'},
      {title: 'ESG Disclosures', value: 'esg'},
      {title: 'Resource Footprint', value: 'esm'},
      {title: 'Health & Safety', value: 'health-safety'},
      {title: 'Incident Management', value: 'incident'},
      {title: 'IT Risk', value: 'it-risk'},
      {title: 'Operational Risk', value: 'operational-risk'},
      {title: 'Policies & Procedures', value: 'policy'},
      {title: 'Privacy, Risk & Compliance', value: 'privacy-risk'},
      {title: 'Responsible Supply Chain', value: 'rsc'},
      {title: 'E&C Training', value: 'training'},
      {title: 'Third Party Risk', value: 'vendor-risk'},
    ],
  },
})
