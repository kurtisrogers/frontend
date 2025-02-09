export const GET = async (query: string) => {
  const response = await fetch(query);

  return [
    {
      text: 'home',
      link: '/'
    },
    {
      text: 'hello world',
      link: '/hello-world'
    },
    {
      text: 'About us',
      link: '/about-us',
    }
  ]

  return response.json();
}
