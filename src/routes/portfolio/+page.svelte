<script lang="ts">
  import Card, { type Card as CardType } from '$lib/components/Card.svelte';
  import i18n from '$lib/stores/i18nStore';
  import { onMount } from 'svelte';
  import { isLoading } from 'svelte-i18next';

  let cards = $state<CardType[]>([]);

  let isReady = $state(false);

  onMount(() => {
    isReady = true;
    setTimeout(simulateFetch, 100);
  });

  const simulateFetch = async () => {
    cards = [
      {
        cardFlyParams: { duration: 500, y: 200 },
        title: 'Find a Doc, Japan',
        titleFlyParams: { duration: 500 },
        imagePath: '/images/portfolio/find-a-doc.png',
        imageAlt: 'Find a Doc Landing Page',
        jobTitleI18nKey: 'portfolio.findADoc.jobTitle',
        techStack: 'TypeScript | Nuxt 3 | Vue 3 | Pinia | Cypress | Yarn',
        descriptionI18nKey: 'portfolio.findADoc.description',
        descriptionFlyParams: { duration: 500, y: 100, delay: 250 },
        borderColor: 'border-orange-500',
        descriptionColor: 'from-purple-500 to-orange-500',
        appLink: 'https://www.findadoc.jp/',
        gitHubLink: 'https://github.com/ourjapanlife/findadoc-web'
      },
      {
        title: 'Vitae Aggregate',
        titleFlyParams: { duration: 500, delay: 500 },
        imagePath: '/images/portfolio/vitae-aggregate.png',
        imageAlt: 'Find a Doc Landing Page',
        cardFlyParams: { duration: 500, y: 200, delay: 500 },
        jobTitleI18nKey: 'portfolio.vitaeAggregate.jobTitle',
        techStack:
          'TypeScript | SvelteKit | Vercel | Python | Django Rest Framework | PostgreSQL | Heroku | npm',
        descriptionI18nKey: 'portfolio.vitaeAggregate.description',
        descriptionFlyParams: { duration: 500, y: 100, delay: 750 },
        descriptionColor: 'from-yellow-500 to-green-500',
        borderColor: 'border-yellow-500',
        appLink: 'https://www.vitaeaggregate.pro/',
        gitHubLink: 'https://github.com/vitaeaggregate'
      }
    ];
  };
</script>

<section class="flex-grow">
  <div class="container flex flex-col gap-5 px-5">
    {#if isReady && !$isLoading}
      <h2 class="text-center text-4xl">
        {$i18n.t('portfolio.header')}
      </h2>
      <ul class="flex flex-wrap gap-5">
        {#each cards as card}
          <Card {card} />
        {/each}
      </ul>
    {/if}
  </div>
</section>
