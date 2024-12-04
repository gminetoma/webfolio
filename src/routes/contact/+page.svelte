<script lang="ts">
  import i18n from '$lib/stores/i18nStore';
  import { isLoading } from 'svelte-i18next';

  interface Form {
    name: string;
    email: string;
    message: string;
  }

  const form = $state<Form>({
    name: '',
    email: '',
    message: ''
  });

  let isErrorNameHidden = $derived(!!form.name.trim());
  let isErrorEmailHidden = $state(!!form.email.trim());
  let isErrorMessageHidden = $state(!!form.message.trim()); 
</script>

<section class="flex-grow">
  <div class="container flex flex-col gap-5 px-5">
    {#if !$isLoading}
      <h2 class="text-center text-4xl">
        {$i18n.t('contact.header')}
      </h2>
      <form class="flex flex-col">
        <label class="relative flex flex-col">
          <span class="mb-1">
            {$i18n.t('contact.form.name')}
          </span>
          <input
            type="text"
            name="name"
            id="name"
            class="rounded-sm"
            bind:value={form.name}
          />
          <span class="error text-sm text-red-500">
            {#if !isErrorNameHidden}
              {$i18n.t('contact.form.error.name')}
            {/if}
          </span>
        </label>
        <label class="relative flex flex-col">
          <span class="mb-1">
            {$i18n.t('contact.form.email')}
          </span>
          <input type="email" name="email" id="email" class="rounded-sm" bind:value={form.email} />
          <span class="error text-sm text-red-500">
            {#if !isErrorEmailHidden}
              {$i18n.t('contact.form.error.email')}
            {/if}
          </span>
        </label>
        <label class="relative flex flex-col">
          <span class="mb-1">
            {$i18n.t('contact.form.message')}
          </span>
          <textarea name="message" id="message" class="rounded-sm" bind:value={form.message}>
          </textarea>
          <span class="error text-sm text-red-500">
            {#if !isErrorMessageHidden}
              {$i18n.t('contact.form.error.message')}
            {/if}
          </span>
        </label>
        <button type="button" class="mt-5 rounded-lg bg-blue-500 py-2 font-medium text-white">
          {$i18n.t('contact.form.submit')}
        </button>
      </form>
    {/if}
  </div>
</section>

<style>
  .error:empty::before {
    content: '\00a0';
  }
</style>
