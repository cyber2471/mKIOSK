import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!!',
      content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    };
  }
  else if (params.slug === 'cyberpark') {
    return {
      title: '반갑습니다. 고객님',
    content: 'Welcome to our blog. VIP Customer!'
  };
}
 
  throw error(404, 'Not found');
}