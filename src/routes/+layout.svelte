<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import pageStore from '$lib/stores/pageStore';
  import SocialMenu from '$lib/components/SocialMenu.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Menu from '$lib/components/Menu.svelte';
  import isMenuHidden from '$lib/stores/menuStore';
  
let { children, data } = $props();

  $effect(() => pageStore.set(data.url as Page));

  $effect(() => {
    $isMenuHidden
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
  });
</script>

<div class="flex h-screen flex-col">
  <Header />
  <div class="relative flex flex-grow">
    {#if !$isMenuHidden}
      <Menu />
    {/if}
    <main class="item mt-5 flex w-full justify-center">
      {@render children()}
    </main>
  </div>
  <SocialMenu />
  {#if $pageStore && $pageStore !== '/'}
    <Footer />
  {/if}
</div>
