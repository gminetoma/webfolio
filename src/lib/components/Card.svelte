<script module lang="ts">
  export interface Card {
    cardFlyParams: FlyParams;
    title: string;
    titleFlyParams: FlyParams;
    imagePath: string;
    imageAlt: string;
    jobTitleI18nKey: string;
    techStack: string;
    descriptionI18nKey: string;
    descriptionFlyParams: FlyParams;
    borderColor: string;
    descriptionColor: string;
    appLink: string;
    gitHubLink: string;
  }
</script>

<script lang="ts">
  import { i18n } from '$lib/stores/i18nStore';
  import { fly, type FlyParams } from 'svelte/transition';

  interface Props {
    card: Card;
  }

  let isDescriptionExpanded = $state(false);

  let { card }: Props = $props();
</script>

<li class="flex flex-col gap-5">
  <h3 class="text-center text-3xl" in:fly={card.titleFlyParams}>{card.title}</h3>
  <div
    class="card relative w-full overflow-hidden rounded-lg border-2 border-opacity-20 shadow-lg {card.borderColor}"
    in:fly={card.cardFlyParams}
  >
    <img src={card.imagePath} alt={card.imageAlt} width="430" height="932" />
    <div
      class="absolute bottom-0 flex h-2/5 w-full"
      class:h-full={isDescriptionExpanded}
      in:fly={card.descriptionFlyParams}
    >
      <div class="z-10 flex flex-col p-7 text-white">
        <div class="flex flex-col gap-5">
          {#if isDescriptionExpanded}
            <h4 class="text-2xl" in:fly={{ duration: 500, delay: 150 }}>
              {$i18n.t(card.jobTitleI18nKey)}
            </h4>
          {/if}
          <p>{$i18n.t(card.descriptionI18nKey)}</p>
          {#if isDescriptionExpanded}
            <div class="flex flex-col gap-5" in:fly={{ y: 50, duration: 500, delay: 150 }}>
              <div>
                <h5 class="text-lg font-semibold text-black">Tech Stack</h5>
                <p>{card.techStack}</p>
              </div>
              <a
                href={card.gitHubLink}
                target="_blank"
                class="font-semibold text-gray-800 underline underline-offset-4"
              >
                GitHub
              </a>
            </div>
          {/if}
        </div>
        <div class="absolute bottom-0 right-0 m-5 flex items-center gap-5">
          <a
            href={card.appLink}
            target="_blank"
            class="font-semibold text-gray-800 underline underline-offset-4"
          >
            {$i18n.t('card.visitApp')}
          </a>
          <button
            type="button"
            class="rounded-lg border px-2 py-1"
            onclick={() => (isDescriptionExpanded = isDescriptionExpanded ? false : true)}
          >
            {isDescriptionExpanded ? $i18n.t('card.btnViewLess') : $i18n.t('card.btnViewMore')}
          </button>
        </div>
      </div>
      <div
        class="card-bg absolute top-0 w-full -rotate-6 rounded-3xl bg-gradient-to-bl opacity-95 {card.descriptionColor}"
        class:rotate-0={isDescriptionExpanded}
      ></div>
    </div>
  </div>
</li>

<style>
  .card {
    height: 500px;
  }

  .card > * {
    transition: all 0.25s ease-out;
  }

  .card-bg {
    height: 200%;
  }
</style>
