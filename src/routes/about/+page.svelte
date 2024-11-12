<script lang="ts">
  import { i18n, isLoading } from '$lib/stores/i18nStore';
  import { sleep } from '$lib/utils';
  import { onMount, tick } from 'svelte';
  import { fly, scale } from 'svelte/transition';

  let isReady = $state(false);
  let isModalOpen = $state(false);
  let huskyGifRef = $state<HTMLDivElement | null>(null);

  onMount(() => (isReady = true));

  const handleDocumentClick = () => {
    console.log('Hello');
    isModalOpen = false;
  };

  const handleDocumentEventListener = async () => {
    if (isModalOpen) {
      await sleep(500);
      document.body.classList.add('overflow-hidden');
      document.addEventListener('click', handleDocumentClick);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('click', handleDocumentClick);
    }
  };

  $effect(() => {
    huskyGifRef && huskyGifRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  $effect(() => {
    handleDocumentEventListener();
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });
</script>

{#if isModalOpen}
  <div
    class="fixed inset-0 z-[100] flex size-full items-center justify-center bg-white bg-opacity-95"
    transition:fly={{ opacity: 0, duration: 300 }}
  >
    <div
      class="prose flex flex-col items-center gap-5"
      in:scale={{ start: 0, duration: 300 }}
      out:scale={{ start: 0, duration: 150 }}
    >
      <span class="text-3xl font-bold text-black">I Love Huskies !</span>
      <div class="not-prose overflow-hidden md:rounded-md" bind:this={huskyGifRef}>
        <img src="/images/husky.gif" alt="Husky!" width="500px" height="600px" />
      </div>
    </div>
  </div>
{/if}

<section class="-mt-5 flex w-full justify-center lg:-mt-0">
  <div class="container flex flex-col items-center justify-center gap-5">
    {#if isReady && !$isLoading}
      <div class="flex flex-col items-center gap-5 2xl:flex-row">
        <div
          class="relative max-w-3xl overflow-hidden lg:rounded-md"
          transition:fly={{ opacity: 0, duration: 500, delay: 200 }}
        >
          <h2
            class="text-shadow absolute bottom-0 z-10 mb-5 w-full text-center text-4xl text-white lg:hidden"
          >
            {$i18n.t('aboutMe.header')}
          </h2>
          <img src="/images/husky.jpg" alt="About Me" />
        </div>
        <article class="prose px-5" transition:fly={{ opacity: 0, duration: 500, delay: 400 }}>
          <h2 class="mt-0 hidden text-center text-4xl lg:block">
            {$i18n.t('aboutMe.header')}
          </h2>
          <p>{@html $i18n.t('aboutMe.text')}</p>
        </article>
      </div>
      <div class="flex flex-col gap-5">
        <button class="underline" onclick={() => (isModalOpen = true)}>
          {$i18n.t('aboutMe.whyHusky')}
        </button>
      </div>
    {/if}
  </div>
</section>
