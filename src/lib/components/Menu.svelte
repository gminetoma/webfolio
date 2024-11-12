<script>
  import SocialIcons from '@rodneylab/svelte-social-icons';
  import { i18n } from '$lib/stores/i18nStore';
  import { fly } from 'svelte/transition';
  import isMenuHidden from '$lib/stores/menuStore';
  import pageStore from '$lib/stores/pageStore';

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
    <div class="flex flex-grow items-start justify-center gap-10">
      <a
        class="flex rounded-lg border border-white"
        href="https://github.com/gminetoma"
        target="_blank"
      >
        <SocialIcons
          height="55"
          width="55"
          network="github"
          fgColor="white"
          bgColor="transparent"
        />
      </a>
      <a
        class="flex rounded-lg border border-blue-500"
        href="https://www.linkedin.com/in/gustavommalves/"
        target="_blank"
      >
        <SocialIcons
          height="55"
          width="55"
          network="linkedin"
          fgColor="white"
          bgColor="transparent"
        />
      </a>
      <a class="flex rounded-lg border border-gray-500" href="mailto:gminetoma@gmail.com">
        <SocialIcons height="55" width="55" network="email" fgColor="white" bgColor="transparent" />
      </a>
    </div>
  </div>
</section>
