import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

  //if (params) return params;
  console.log(params.slug)
  /*
  const post = await getPostFromDatabase(params.slug);
 
  if (post) {
    return post;
  }
 
  throw error(404, 'Not found');
  */
}