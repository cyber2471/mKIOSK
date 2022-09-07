
<script>
  function goPath(param)
  {
    location.href = param;
  }

  import Logo from "$lib/assets/logo.png"
  import KOR from "$lib/assets/KOR.png"
  import JAN from "$lib/assets/JAN.png"
  import VTM from "$lib/assets/VTM.png"
  import USA from "$lib/assets/USA.png"
  import CHA from "$lib/assets/CHA.png"
 // import logo from "https://www.astems.co.kr/home/images/logo_20200515.png"

</script>
<nav>
  <center>
    <input type=button on:click={()=>goPath('/')}  value='처음으로'>
    <img src='https://www.astems.co.kr/home/images/logo_20200515.png' alt='logo' />
    <img class=flag src={KOR} alt='KOR' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
    <img class=flag src={VTM} alt='VTM' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
    <img class=flag src={CHA} alt='CHA' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
    <img class=flag src={JAN} alt='JAN' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
    <img class=flag src={USA} alt='USA' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
    <!--<input type=button on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'> --> 
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

  .flag {
      width: 20px; height: 15px; cursor:hand;
  }
</style>