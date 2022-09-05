import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').Action} */
export async function POST({ request, setHeaders, url }) {
  const values = await request.formData();
 
  const username = /** @type {string} */ (values.get('username'));
  const password = /** @type {string} */ (values.get('password'));
 
  const user = await db.findUser(username);
 
  if (!user) {
    return {
      status: 403,
      errors: {
        username: 'No user with this username'
      }
    };
  }
 
  if (user.password !== hash(password)) {
    return {
      status: 403,
      errors: {
        password: 'Incorrect password'
      }
    };
  }
 
  setHeaders({
    'set-cookie': createSessionCookie(user.id)
  });
 
  return {
    location: url.searchParams.get('redirectTo') ?? '/'
  };
}