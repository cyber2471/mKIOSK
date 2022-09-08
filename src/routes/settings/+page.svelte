<script context="module">
    export const load = async({fetch}) => {
        const res = await fetch("/graphql", {
            method : "POST", 
            Headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                query: `query {
                books { 
                    title
                    author
                }
                }`,
                }),
        }); 

        const { data } = await res.json()
        console.log(data)

        return {
            props: { data }
        }
    };
</script>

<script>
    export let data;
</script>

{JSON.stringify(data)}

<h1>Settings</h1>