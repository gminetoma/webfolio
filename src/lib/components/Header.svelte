<script lang="ts">
  import pageStore from '$lib/stores/pageStore';
  import { fly, scale } from 'svelte/transition';
  import Language from './Language.svelte';
  import isMenuHidden from '$lib/stores/menuStore';
</script>

<header class="sticky top-0 z-50 bg-white">
  <div class="container flex items-center justify-between p-3">
    <div class="flex items-center gap-5">
      <button
        class="z-10 w-7 bg-white"
        onclick={() => ($isMenuHidden = $isMenuHidden ? false : true)}
      >
        {#if $isMenuHidden}
          <img src="/images/menuIcon.svg" alt="Open Menu" />
        {:else}
          <img src="/images/closeIcon.svg" alt="Close Menu" />
        {/if}
      </button>
      {#if $pageStore && $pageStore !== '/'}
        <h1 class="text-xl" in:fly={{ x: -50, duration: 300 }} out:fly={{ x: -50, duration: 300 }}>
          <a href="/">Gustavo Minetoma</a>
        </h1>
      {/if}
    </div>
    <Language />
  </div>
  {#if $pageStore && $pageStore !== '/'}
    <hr class="border-orange-500" in:scale={{ duration: 300 }} />
  {:else}
    <hr class="scale-0" />
  {/if}
</header>
