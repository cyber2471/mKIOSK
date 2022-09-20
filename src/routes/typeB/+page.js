import { error } from '@sveltejs/kit';
 
export const ssr = false;
// export const csr = true; 

// console.log("ssr:",ssr)
// console.log("csr:",csr)

export function load({ params }) {

  console.log("typeB")

}