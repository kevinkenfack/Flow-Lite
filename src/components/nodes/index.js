// Wireframes
// Content
import Website from "./wireframes/Website"
import Landing from "./wireframes/Landing"
import Landing2 from "./wireframes/Landing2"
import About from "./wireframes/About"
import Contact from "./wireframes/Contact"
import Blog from "./wireframes/Blog"
import Portfolio from "./wireframes/Portfolio"
import Files from "./wireframes/Files"

// Commerce
import Search from "./wireframes/Search"
import Products from "./wireframes/Products"
import Product from "./wireframes/Product"
import ShoppingCart from "./wireframes/ShoppingCart"
import Payment from "./wireframes/Payment"
import Review from "./wireframes/Review"

// Marketing
import CallToAction from "./wireframes/CallToAction"
import Pricing from "./wireframes/Pricing"

// Interactive
import Survay from "./wireframes/Survay"
import Video from "./wireframes/Video"
import Map from "./wireframes/Map"
import Calendar from "./wireframes/Calendar"
import Dashboard from "./wireframes/Dashboard"
import Table from "./wireframes/Table"
import Comments from "./wireframes/Comments"
import Download from "./wireframes/Download"

// Utility
import SignIn from "./wireframes/SignIn"
import Register from "./wireframes/Register"
import Error from "./wireframes/Error"
import User from "./wireframes/User"
import ThankYou from "./wireframes/ThankYou"
import Form from "./wireframes/Form"

// Shapes
import Circle from "./shapes/Circle"
import Diamond from './shapes/Diamond'
import Rectangle from './shapes/Rectangle'
import Triangle from './shapes/Triangle'
import RoundRectangle from './shapes/RoundRectangle'

// Social
import Facebook from "./social/Facebook"
import Gmail from "./social/Gmail"
import Instagram from "./social/Instagram"
import Linkedin from "./social/Linkedin"
import Pinterest from "./social/Pinterest"
import Skype from "./social/Skype"
import TikTok from "./social/TikTok"
import Whatsup from "./social/Whatsup"
import XTwitter from "./social/XTwitter"
import Youtube from "./social/Youtube"
import Github from "./social/Github"
import Discord from "./social/Discord"
import Slack from "./social/Slack"
import Medium from "./social/Medium"
import Vimeo from "./social/Vimeo"
import Telegram from "./social/Telegram"
import Etsy from "./social/Etsy"
import Twitch from "./social/Twitch"
import Snapchat from "./social/Snapchat"
import Reddit from "./social/Reddit"
import Threads from "./social/Threads"
import Quora from "./social/Quora"
import Flickr from "./social/Flickr"

// Text
import Annotation from "./text/Annotation"

// Define custome nodes type
export const nodesTypes = {
  website: {
    label: "Website",
    group: "wireframe",
    subgroup: "content",
    component: Website
  },
  landing: {
    label: "Landing",
    group: "wireframe",
    subgroup: "content",
    component: Landing
  },
  landing2: {
    label: "Landing 2",
    group: "wireframe",
    subgroup: "content",
    component: Landing2
  },
  about: {
    label: "About Us",
    group: "wireframe",
    subgroup: "content",
    component: About
  },
  blog: {
    label: "Blog",
    group: "wireframe",
    subgroup: "content",
    component: Blog
  },
  contact: {
    label: "Contact",
    group: "wireframe",
    subgroup: "content",
    component: Contact
  },
  portfolio: {
    label: "Portfolio",
    group: "wireframe",
    subgroup: "content",
    component: Portfolio
  },
  files: {
    label: "Files",
    group: "wireframe",
    subgroup: "content",
    component: Files
  },
  search: {
    label: "Search",
    group: "wireframe",
    subgroup: "commerce",
    component: Search
  },
  products: {
    label: "Product List",
    group: "wireframe",
    subgroup: "commerce",
    component: Products
  },
  product: {
    label: "Product",
    group: "wireframe",
    subgroup: "commerce",
    component: Product
  },
  shoppingCart: {
    label: "Shopping cart",
    group: "wireframe",
    subgroup: "commerce",
    component: ShoppingCart
  },
  payment: {
    label: "Payment",
    group: "wireframe",
    subgroup: "commerce",
    component: Payment
  },
  review: {
    label: "Review",
    group: "wireframe",
    subgroup: "commerce",
    component: Review
  },
  callToAction: {
    label: "Call to action",
    group: "wireframe",
    subgroup: "marketing",
    component: CallToAction
  },
  pricing: {
    label: "Pricing",
    group: "wireframe",
    subgroup: "marketing",
    component: Pricing
  },
  survay: {
    label: "Survay",
    group: "wireframe",
    subgroup: "interactive",
    component: Survay
  },
  video: {
    label: "Video",
    group: "wireframe",
    subgroup: "interactive",
    component: Video
  },
  map: {
    label: "Map",
    group: "wireframe",
    subgroup: "interactive",
    component: Map
  },
  calendar: {
    label: "Calendar",
    group: "wireframe",
    subgroup: "interactive",
    component: Calendar
  },
  dashboard: {
    label: "Dashboard",
    group: "wireframe",
    subgroup: "interactive",
    component: Dashboard
  },
  table: {
    label: "Table",
    group: "wireframe",
    subgroup: "interactive",
    component: Table
  },
  comments: {
    label: "Comments",
    group: "wireframe",
    subgroup: "interactive",
    component: Comments
  },
  download: {
    label: "Download",
    group: "wireframe",
    subgroup: "interactive",
    component: Download
  },
  signIn: {
    label: "SignIn",
    group: "wireframe",
    subgroup: "utility",
    component: SignIn
  },
  register: {
    label: "Register",
    group: "wireframe",
    subgroup: "utility",
    component: Register
  },
  error: {
    label: "Error Page",
    group: "wireframe",
    subgroup: "utility",
    component: Error
  },
  user: {
    label: "User",
    group: "wireframe",
    subgroup: "utility",
    component: User
  },
  form: {
    label: "Form",
    group: "wireframe",
    subgroup: "utility",
    component: Form
  },
  thankyou: {
    label: "Thank you",
    group: "wireframe",
    subgroup: 'utility',
    component: ThankYou
  },
  circle: {
    label: "Circle",
    group: "shape",
    component: Circle
  },
  diamond: {
    label: "Diamond",
    group: "shape",
    component: Diamond
  },
  rectangle: {
    label: "Rectangle",
    group: "shape",
    component: Rectangle
  },
  triangle: {
    label: "Triangle",
    group: "shape",
    component: Triangle
  },
  roundrectangle: {
    label: "Round rectangle",
    group: "shape",
    component: RoundRectangle
  },
  facebook: {
    label: "Facebook",
    group: "social",
    component: Facebook
  },
  gmail: {
    label: "Gamil",
    group: "social",
    component: Gmail
  },
  instagram: {
    label: "Instagram",
    group: "social",
    component: Instagram
  },
  discord: {
    label: "Discord",
    group: "social",
    component: Discord
  },
  linkedin: {
    label: "Linkedin",
    group: "social",
    component: Linkedin
  },
  flickr: {
    label: "Flickr",
    group: "social",
    component: Flickr
  },
  pinterest: {
    label: "Pinterest",
    group: "social",
    component: Pinterest
  },
  twitch: {
    label: "Twitch",
    group: "social",
    component: Twitch
  },
  skype: {
    label: "Skype",
    group: "social",
    component: Skype
  },
  github: {
    label: "Github",
    group: "social",
    component: Github
  },
  medium: {
    label: "Medium",
    group: "social",
    component: Medium
  },
  threads: {
    label: "Threads",
    group: "social",
    component: Threads
  },
  tiktok: {
    label: "Tik Tok",
    group: "social",
    component: TikTok
  },
  telegram: {
    label: "Telegram",
    group: "social",
    component: Telegram
  },
  quora: {
    label: "Quora",
    group: "social",
    component: Quora
  },
  etsy: {
    label: "Etsy",
    group: "social",
    component: Etsy
  },
  whatsup: {
    label: "Whatsup",
    group: "social",
    component: Whatsup
  },
  reddit: {
    label: "Reddit",
    group: "social",
    component: Reddit
  },
  xtwitter: {
    label: "X",
    group: "social",
    component: XTwitter
  },
  youtube: {
    label: "Youtube",
    group: "social",
    component: Youtube
  },
  vimeo: {
    label: "Vimeo",
    group: "social",
    component: Vimeo
  },
  slack: {
    label: "Slack",
    group: "social",
    component: Slack
  },
  snapchat: {
    label: "Snapchat",
    group: "social",
    component: Snapchat
  },
  annotation: {
    label: "Annotation",
    group: "text",
    component: Annotation
  },
}

export default nodesTypes;