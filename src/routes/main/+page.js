import { error } from '@sveltejs/kit';
 
export function load({ params }) {

  console.log("111111111111")

      return {
        title: 'Hello world!',
        content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
      };
  

}