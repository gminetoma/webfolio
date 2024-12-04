<script lang="ts">
  import i18n from '$lib/stores/i18nStore';
  import { onMount } from 'svelte';
  import { isLoading } from 'svelte-i18next';

  let isReady = $state(false);

  onMount(() => (isReady = true));
</script>

<section class="flex-grow">
  <div class="container">
    {#if isReady && !$isLoading}
      <div class="relative -mt-5">
        <h2 class="text-shadow absolute bottom-0 z-10 mb-5 w-full text-center text-4xl text-white">
          {$i18n.t('aboutMe.header')}
        </h2>
        <img src="/images/husky.jpg" alt="About Me" />
      </div>
      <article class="prose p-5">
        <p>{$i18n.t('aboutMe.text')}</p>
      </article>
    {/if}
  </div>
</section>

<style>
  .text-shadow {
    text-shadow: 0 0 5px black;
  }
</style>
