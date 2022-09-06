
<script>
  function goPath(param)
  {
    location.href = param;
    console.log(event)
  }

  import Logo from "$lib/assets/logo.png"
</script>
<nav>
  <center>
    <input type=button on:click={()=>goPath('/')}  value='처음으로'>
    <img src={Logo} />
    <input type=button on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'>
  </center>
</nav>
  
  <slot></slot>

<style>
  nav { 
        #background-color: rgb(192, 189, 189);
        margin-top: 0px;
      }
  input { 
      background-color: rgb(241, 237, 237);
      border: 0;
  }
</style>