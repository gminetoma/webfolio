<script>
  import { i18n } from '$lib/stores/i18nStore';
</script>

<div class="flex gap-3">
  <button
    type="button"
    class="w-10"
    class:inactive={$i18n.language !== 'en'}
    on:click={() => $i18n.changeLanguage('en')}
  >
    <img src="/images/usFlag.svg" alt="Change to English" />
  </button>
  <button
    type="button"
    class="w-10"
    class:inactive={$i18n.language !== 'pt-BR'}
    on:click={() => $i18n.changeLanguage('pt-BR')}
  >
    <img src="/images/brFlag.svg" alt="Change to Brazilian Portuguese" />
  </button>
</div>

<style>
  .inactive {
    filter: grayscale();
    scale: 0.75;
  }
</style>
