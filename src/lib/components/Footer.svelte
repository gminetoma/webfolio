<script lang="ts">
  import { i18n, isLoading } from '$lib/stores/i18nStore';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isReady = $state(false);

  onMount(() => (isReady = true));
</script>

<footer class="mt-5">
  {#if isReady && !$isLoading}
    <div class="flex h-20 flex-col items-center" in:fly={{ duration: 500, delay: 250 }}>
      <p>{$i18n.t('footer.madeWithLove')}</p>
      <div class="flex h-10 items-center overflow-hidden">
        <a href="https://svelte.dev/">
          <img
            src="/images/svelte.svg"
            alt="svelte"
            width="80px"
            height="80px"
            class="object-cover"
          />
        </a>
      </div>
    </div>
  {/if}
</footer>
