<script>
    import { setContext } from 'svelte'
    
    import PanelComponent from './panelComponent.svelte'
    
    let count = 20
    
    let setValue ;

    function incrementCount(event) {
        count --
    }

    function changeNum(aname)
    {
        count ++
  
    } 


    export let defaultAge = 21;

let status = "";

let friendName = "";
let friendAge = defaultAge;

async function addFriend() {
  try {

    // Add the new friend!
    const id = await db.friends.add({
      name: friendName,
      age: friendAge
    });

    status = `Friend ${friendName} successfully added. Got id ${id}`;
    
    // Reset form:
    friendName = "";
    friendAge = defaultAge;
  } catch (error) {
    status = `Failed to add ${friendName}: ${error}`;
  }
}


function addNumber() {
    Storage.update(arr => [...arr, n]);
    n = '';
    // console.log("arr:",arr)
  }

    setContext('incrementCount', incrementCount)
    setContext('incrementCount', changeNum)

    setContext('count', count)
    
    // console.log(incrementCount)
    </script>  
     
    <input type=button on:click={() => changeNum('cyberpark')} value='click'>
    <PanelComponent {count} />