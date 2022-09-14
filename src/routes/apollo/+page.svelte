<!-- App.svelte -->
<Books />

<script>
  import { ApolloClient } from "@apollo-server-svelte-kit";
  import { setClient } from "apollo-server-svelte-kit";
  import Books from "./Books.svelte";

  // 1. Create an Apollo client and pass it to all child components
  //    (uses svelte's built-in context)
  const client = new ApolloClient({
    /* ... */
  });
  setClient(client);
</script>