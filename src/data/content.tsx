// import components here
import Content from "@/components/atoms/Content/Content"
import Banner from "@/components/organisms/Banner/Banner"

export const Home = [
  {
    component: Banner,
    title: 'Home',
    backgroundImage: {
      src: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg',
      alt: 'Soemthing',
    }
  },
  {
    component: Content,
    content:
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus.</p>,
    gridLayout: "wide",
    backgroundColor: "white",
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
    content: 
    <>
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sodales arcu. Ut nec imperdiet orci. Mauris ullamcorper lacus tincidunt dolor semper interdum. Nulla luctus ex vel volutpat ultricies. Mauris vel magna diam. Quisque non congue diam. Sed neque lacus, auctor vitae arcu eu, pellentesque condimentum lorem. Donec at rutrum mauris. Fusce molestie, metus vel aliquet elementum, felis dolor placerat nisi, a ultricies eros ipsum id lacus. Donec eget dolor lacus.</p>
      </>,
    gridLayout: "wide",
    backgroundColor: "white",
  },
]
