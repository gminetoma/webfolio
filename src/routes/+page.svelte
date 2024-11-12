<script lang="ts">
  import { goto } from '$app/navigation';
  import Ocean from '$lib/components/Ocean.svelte';
  import { i18n, isLoading } from '$lib/stores/i18nStore';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isReady = $state(false);

  onMount(() => (isReady = true));
</script>

<section class="-mt-5 flex flex-grow justify-center">
  <div
    class="container z-10 flex flex-grow flex-col items-center justify-center gap-10 overflow-hidden"
  >
    {#if isReady && !$isLoading}
      <img
        in:fade={{ duration: 300 }}
        src="/images/profile.png"
        alt="profile"
        class="size-60 rounded-full object-cover"
      />
      <div class="text-center text-3xl leading-loose">
        <h2 in:fly={{ y: 50, duration: 500 }}>{$i18n.t('index.hey')}</h2>
        <h1 in:fly={{ x: 50, duration: 500, delay: 250 }} class="block text-4xl text-green-500">
          {$i18n.t('index.name')}
        </h1>
        <h2 in:fly={{ x: -50, duration: 500, delay: 500 }}>{$i18n.t('index.fullStackEngineer')}</h2>
      </div>
      <button
        in:fly={{ duration: 500, delay: 750 }}
        type="button"
        class="cursor-pointer rounded-lg border-2 px-5 py-2"
        onclick={() => goto('/portfolio')}
      >
        {$i18n.t('index.btnViewPortfolio')}
      </button>
    {/if}
  </div>
  <Ocean />
</section>
