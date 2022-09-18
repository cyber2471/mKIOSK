import { error } from '@sveltejs/kit';
 
//  export const csr = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  // console.log("param:",params.slug)
  console.log("page.server.js",params)

  if (params) return "cyberppark!!!";

   const post = await getPostFromDatabase(params.slug);
 
  if (post) {
    return post;
  }
 
  throw error(404, 'Not found'); 
 
}