<script lang="ts">
  import pageStore from '$lib/stores/pageStore';
  import { clickOutside } from '$lib/utils';
  import SocialIcons from '@rodneylab/svelte-social-icons';
  import { onMount } from 'svelte';
  import { fly, scale } from 'svelte/transition';

  let isIconsHidden = $state(true);

  let isReady = $state(false);

  onMount(() => (isReady = true));
</script>

{#if isReady && $pageStore !== '/contact'}
  <div
    use:clickOutside={() => (isIconsHidden = true)}
    class="fixed bottom-0 right-0 z-10 mb-5 mr-5 flex gap-1"
    transition:scale={{ duration: 300 }}
  >
    {#if !isIconsHidden}
      <ul class="flex gap-1">
        <li in:fly={{ x: 10, duration: 150, delay: 150 }} out:fly={{ x: 10, duration: 150 }}>
          <a href="https://github.com/gminetoma" target="_blank">
            <SocialIcons network="github" fgColor="#eeeeee" />
          </a>
        </li>
        <li
          in:fly={{ x: 10, duration: 150, delay: 75 }}
          out:fly={{ x: 10, duration: 150, delay: 75 }}
        >
          <a href="https://www.linkedin.com/in/gustavommalves/" target="_blank">
            <SocialIcons network="linkedin" fgColor="#eeeeee" />
          </a>
        </li>
        <li in:fly={{ x: 10, duration: 150 }} out:fly={{ x: 10, duration: 150, delay: 150 }}>
          <a href="mailto:gminetoma@gmail.com">
            <SocialIcons network="email" fgColor="#eeeeee" />
          </a>
        </li>
      </ul>
    {/if}
    <button onclick={() => (isIconsHidden = isIconsHidden ? false : true)}>
      <SocialIcons network="sharethis" fgColor="#eeeeee" />
    </button>
  </div>
{/if}
