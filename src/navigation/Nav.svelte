<script>

  import TopNav from "./components/top/TopNav.svelte"
  import Footer from "./components/footer/Footer.svelte"
  import LeftNav from "./components/side/LeftNav.svelte"

</script>


<main>

  <TopNav />

  <div id="layoutSidenav">

    <LeftNav />
   
    <div id="layoutSidenav_content">

      <main>

        <slot />

      </main>

      <Footer />

    </div>

</main>
