// import components here
import Content from "@/components/atoms/Content/Content"

export const Home = [
  {
    component: Content,
    content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus.</p>,
    gridLayout: "wide",
    backgroundColor: "red",
  },
  {
    component: Content,
    content: <p>Sed ornare tortor vulputate, faucibus tellus id, venenatis sem. Pellentesque dui sem, finibus eu auctor ac, accumsan sed mi. Suspendisse id diam tristique, luctus lorem sit amet, tristique lacus. Quisque mauris libero, malesuada non augue cursus, sodales tristique lorem. Nullam hendrerit ac neque ac convallis. Donec rhoncus eros in diam pretium aliquet. Ut a velit vitae ante faucibus molestie ut a tortor. Vestibulum convallis risus vitae gravida pharetra. Vivamus mollis porttitor odio, ultricies condimentum lacus posuere sed. Nulla aliquam mollis tincidunt. Etiam non enim sit amet felis tempus accumsan sed sit amet lorem.</p>,
  },
  {
    component: Content,
    content: <p>Duis at malesuada justo. Maecenas egestas eget libero eget lobortis. Vivamus cursus viverra nisi non consectetur. Proin risus nisl, laoreet nec vulputate nec, posuere a enim. Morbi fringilla erat id tellus congue viverra. Suspendisse semper ligula nec rhoncus venenatis. Etiam semper iaculis felis, et ullamcorper risus porttitor quis. Cras auctor tempus lorem ac tristique.</p>,
    gridLayout: "full",
  },
  {
    component: Content,
    content: <div><p>Some content for this section</p><button>Find out more</button></div>,
  },
]

export const About = [
  {
    component: Content,
    content: <p>Some content for the about us page</p>,
  },
]
