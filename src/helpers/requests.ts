export const GET = async (query?: string) => {
  // const response = await fetch(query);

  return [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
    {
      text: 'Contact us',
      link: '/contact-us',
    },
  ]

  // return response.json();
}
