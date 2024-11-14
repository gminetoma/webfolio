<script>
  import i18n from '$lib/stores/i18nStore';
</script>

<section class="flex-grow">
  <div class="container">
    <div class="relative -mt-5">
      <h2 class="text-shadow absolute bottom-0 z-10 mb-5 w-full text-center text-4xl text-white">
        {$i18n.t('aboutMe.header')}
      </h2>
      <img src="/images/husky.jpg" alt="About Me" />
    </div>
    <div class="p-5 prose">
      <p>{$i18n.t('aboutMe.text')}</p>
    </div>
  </div>
</section>

<style>
  .text-shadow {
    text-shadow: 0 0 5px black;
  }
</style>
