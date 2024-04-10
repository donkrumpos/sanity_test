import floatie from './entities/floatie'
import redirect from './entities/redirect'
import marketo_form from './entities/marketo_form'
import shared_block from './entities/shared_block'

import course from './pages/course'
import page from './pages/page'
import resource from './pages/resource'
import press_release from './pages/press_release'

import resource_center from './singletons/resource_center'
import course_library from './singletons/course_library'
import top_banner from './singletons/top_banner'
import microsite from './singletons/microsite'

import course_category from './categories/course_category'
import course_type from './categories/course_type'
import page_type from './categories/page_type'
//import product_type from './categories/product_type'
import resource_topic from './categories/resource_topic'
import resource_type from './categories/resource_type'
import regulation from './categories/regulation'
import solution from './categories/solution'
import topic from './categories/topic'
import course_format from './categories/course_format'
import audience from './categories/audience'

import agenda from './blocks/agenda'
import anchor_link_bar from './blocks/anchor_link_bar'
import announcement from './blocks/announcement'
import announcement_video from './blocks/announcement_video'
import asset_list from './blocks/asset_list'
import banner from './blocks/banner'
import buffer from './blocks/buffer'
import call_to_action from './blocks/call_to_action'
import campaign_banner from './blocks/campaign_banner'
import campaign_content from './blocks/campaign_content'
import campaign_form from './blocks/campaign_form'
import campaign_hero from './blocks/campaign_hero'
import campaign_promo from './blocks/campaign_promo'
import cards from './blocks/cards'
import cards_grid from './blocks/cards_grid'
import content_list from './blocks/content_list'
import embed from './blocks/embed'
import faq from './blocks/faq'
import featured_asset from './blocks/featured_asset'
import featured_content from './blocks/featured_content'
import hero from './blocks/hero'
import hero_navex_one from './blocks/hero_navex_one'
import hero_product from './blocks/hero_product'
import hero_solution from './blocks/hero_solution'
import hero_video from './blocks/hero_video'
import image_cta from './blocks/image_cta'
import image_list from './blocks/image_list'
import images from './blocks/images'
import navex_one_strip from './blocks/navex_one_strip'
import partners from './blocks/partners'
import people_modal from './blocks/people_modal'
import people from './blocks/people'
import photo_plus_text from './blocks/photo_plus_text'
import product_list from './blocks/product_list'
import quote from './blocks/quote'
import quote_cards from './blocks/quote_cards'
import shared_block_ref from './blocks/shared_block_ref'

import statistics from './blocks/statistics'
import steps from './blocks/steps'
import step_list from './blocks/step_list'
import tabs from './blocks/tabs'
import testimonial from './blocks/testimonial'
import value_props from './blocks/value_props'
import vertical_content from './blocks/vertical_content'
import video from './blocks/video'
import whistleb_signup from './blocks/whistleb_signup'

import asset from './fields/asset'
import blocks from './fields/blocks'
import full_text from './fields/full_text'
import picture from './fields/picture'
import title from './fields/title'
import language from './fields/language'
import seo from './fields/seo'
import published_at from './fields/published_at'
import resource_feature from './fields/resource_feature'
import link from './fields/link'
import menu_link from './fields/menu_link'
import person from './fields/person'
import product_icon from './fields/product_icon'
import aliases from './fields/aliases'
import card_icon from './fields/card_icon'

import theme_greenGriege from './style_variations/theme_greenGriege'
import theme_greenGriegeWhite from './style_variations/theme_greenGriegeWhite'
import theme_greenGreigeBluePurple from './style_variations/theme_greenGreigeBluePurple'
import theme_greenOrange from './style_variations/theme_greenOrange'
import theme_bluePurple from './style_variations/theme_bluePurple'
import theme_classicBlues from './style_variations/theme_classicBlues'
import theme_allColors from './style_variations/theme_allColors'
import theme_navexNext from './style_variations/theme_navexNext'

import content_order from './style_variations/content_order'
import flush from './style_variations/flush'
import half_width from './style_variations/half_width'
import layout from './style_variations/layout'
import padding from './style_variations/padding'
import vertical_alignment from './style_variations/vertical_alignment'

// Menus
import menu_header from './menus/menu_header'
import menu_main from './menus/menu_main'
import menu_footer from './menus/menu_footer'
import menu_microsite from './menus/menu_microsite'

// Blog schemas
import blog from './entities/blog'
import author from './entities/author'
import article from './pages/article'
import blog_topic from './categories/blog_topic'
import blog_text from './fields/blog_text'

export const schemaTypes = [
  // pages
  page,
  resource,
  course,
  press_release,
  // singletons
  resource_center,
  course_library,
  top_banner,
  microsite,
  // menus
  menu_header,
  menu_main,
  menu_footer,
  menu_microsite,
  // entities
  floatie,
  redirect,
  marketo_form,
  asset,
  resource_feature,
  shared_block,
  // categories
  page_type,
  resource_type,
  course_type,
  course_category,
  solution,
  topic,
  regulation,
  course_format,
  audience,
  resource_topic,
  // fields
  blocks,
  full_text,
  title,
  picture,
  language,
  seo,
  published_at,
  link,
  menu_link,
  person,
  product_icon,
  aliases,
  card_icon,
  // blocks
  agenda,
  anchor_link_bar,
  announcement,
  announcement_video,
  asset_list,
  banner,
  buffer,
  call_to_action,
  campaign_banner,
  campaign_content,
  campaign_form,
  campaign_hero,
  campaign_promo,
  cards,
  cards_grid,
  content_list,
  embed,
  faq,
  featured_asset,
  featured_content,
  hero,
  hero_navex_one,
  hero_product,
  hero_solution,
  hero_video,
  image_cta,
  image_list,
  images,
  navex_one_strip,
  partners,
  people_modal,
  people,
  photo_plus_text,
  product_list,
  quote,
  quote_cards,
  shared_block_ref,
  statistics,
  steps,
  step_list,
  tabs,
  testimonial,
  value_props,
  vertical_content,
  video,
  whistleb_signup,
  // style variations
  theme_greenGriege,
  theme_greenGriegeWhite,
  theme_greenGreigeBluePurple,
  theme_greenOrange,
  theme_bluePurple,
  theme_classicBlues,
  theme_allColors,
  theme_navexNext,
  content_order,
  flush,
  half_width,
  layout,
  padding,
  vertical_alignment,
  // blog
  blog,
  author,
  article,
  blog_topic,
  blog_text,
]
