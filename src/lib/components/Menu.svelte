<script>
  import { i18n } from '$lib/stores/i18nStore';
  import { fly } from 'svelte/transition';
  import isMenuHidden from '$lib/stores/menuStore';
  import pageStore from '$lib/stores/pageStore';
  import MySocialIcons from './MySocialIcons.svelte';

  const handleCloseMenu = () => ($isMenuHidden = true);
</script>

<section
  class="fixed z-20 h-full w-full"
  in:fly={{ x: -100, duration: 500 }}
  out:fly={{ x: -100, duration: 500 }}
>
  <div
    class="flex h-full w-full flex-col items-center gap-5 bg-black bg-opacity-90 p-5 text-lg font-semibold uppercase text-white"
  >
    <img
      class="size-40 overflow-hidden rounded-full object-cover ring-2 ring-blue-500"
      src="/images/profile.png"
      alt="Profile"
    />
    <ul class="flex w-full flex-col divide-y-2">
      <li class="flex justify-center p-5">
        <a
          href="/portfolio"
          class:text-green-600={$pageStore === '/portfolio'}
          onclick={handleCloseMenu}
        >
          {$i18n.t('menu.portfolio')}
        </a>
      </li>
      <li class="flex justify-center p-5">
        <a href="/about" class:text-green-600={$pageStore === '/about'} onclick={handleCloseMenu}>
          {$i18n.t('menu.aboutMe')}
        </a>
      </li>
      <li class="flex justify-center p-5">
        <a
          href="/contact"
          class:text-green-600={$pageStore === '/contact'}
          onclick={handleCloseMenu}
        >
          {$i18n.t('menu.contact')}
        </a>
      </li>
    </ul>
    <MySocialIcons bgColor="transparent" fgColor="white" />
  </div>
</section>
