<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import pageStore from '$lib/stores/pageStore';
  import SocialMenu from '$lib/components/SocialMenu.svelte';
  import i18n from '$lib/stores/i18nStore';
  import { isLoading } from 'svelte-i18next';
  import Footer from '$lib/components/Footer.svelte';
  import Menu from '$lib/components/Menu.svelte';
  import isMenuHidden from '$lib/stores/menuStore';

  let { children, data } = $props();

  $isLoading = true;

  $effect(() => pageStore.set(data.url as Page));

  $effect(() => $i18n && isLoading.set(false));

  $effect(() => {
    $isMenuHidden
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
  });
</script>

<div class="flex h-screen flex-col gap-5">
  <Header />
  <div class="relative flex flex-grow">
    {#if !$isMenuHidden}
      <Menu />
    {/if}
    {@render children()}
  </div>
  <SocialMenu />
  {#if $pageStore && $pageStore !== '/'}
    <Footer />
  {/if}
</div>
