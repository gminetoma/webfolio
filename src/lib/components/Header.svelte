<script lang="ts">
  import pageStore from '$lib/stores/pageStore';
  import { i18n, isLoading } from '$lib/stores/i18nStore';
  import { fly, scale } from 'svelte/transition';
  import Language from './Language.svelte';
  import isMenuHidden from '$lib/stores/menuStore';
  import { onMount } from 'svelte';

  let isReady = $state(false);

  onMount(() => (isReady = true));
</script>

<header class="sticky top-0 z-50 flex min-h-[60px] justify-center bg-white">
  {#if isReady && !$isLoading}
    <div class="container relative m-3 flex items-center">
      <div class="z-10 flex items-center gap-5">
        <button
          class="z-10 w-7 bg-white md:hidden"
          onclick={() => ($isMenuHidden = $isMenuHidden ? false : true)}
        >
          <img src="/images/menuIcon.svg" alt="Open Menu" class:hidden={!$isMenuHidden} />
          <img src="/images/closeIcon.svg" alt="Close Menu" class:hidden={$isMenuHidden} />
        </button>
        {#if $pageStore && $pageStore !== '/'}
          <h1
            class="text-xl"
            in:fly={{ x: -50, duration: 300 }}
            out:fly={{ x: -50, duration: 300 }}
          >
            <a href="/">Gustavo Minetoma</a>
          </h1>
        {/if}
      </div>
      <div class="absolute hidden w-full items-center justify-center gap-5 md:flex">
        <a href="/portfolio" class="relative">
          <div class="absolute top-full flex w-full justify-center">
            {#if $pageStore === '/portfolio'}
              <img
                src="/images/right-arrow.svg"
                alt="current page"
                class="size-5 rotate-90"
                transition:fly={{ x: -5, duration: 300 }}
              />
            {/if}
          </div>
          <span class={$pageStore === '/portfolio' ? 'text-green-600' : ''}>
            {$i18n.t('header.portfolio')}
          </span>
        </a>
        <a href="/about" class="relative">
          <div class="absolute top-full flex w-full justify-center">
            {#if $pageStore === '/about'}
              <img
                src="/images/right-arrow.svg"
                alt="current page"
                class="size-5 -rotate-90"
                transition:fly={{ x: -5, duration: 300 }}
              />
            {/if}
          </div>
          <span class={$pageStore === '/about' ? 'text-green-600' : ''}>
            {$i18n.t('header.aboutMe')}
          </span>
        </a>
        <a href="/contact" class="relative">
          <div class="absolute top-full flex w-full justify-center">
            {#if $pageStore === '/contact'}
              <img
                src="/images/right-arrow.svg"
                alt="current page"
                class="size-5 rotate-90"
                transition:fly={{ x: -5, duration: 300 }}
              />
            {/if}
          </div>
          <span class={$pageStore === '/contact' ? 'text-green-600' : ''}>
            {$i18n.t('header.contact')}
          </span>
        </a>
      </div>
      <div class="absolute right-0 z-10">
        <Language />
      </div>
    </div>
    {#if $pageStore && $pageStore !== '/'}
      <hr class="border-orange-500" in:scale={{ duration: 300 }} />
    {:else}
      <hr class="scale-0" />
    {/if}
  {/if}
</header>
