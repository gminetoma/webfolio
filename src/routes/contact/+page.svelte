<script lang="ts">
  import { i18n, isLoading } from '$lib/stores/i18nStore';
  import { onMount } from 'svelte';

  type Input<Error extends Record<string, boolean>> = {
    value: string;
    error?: Error;
  };

  type FormData = {
    name: Input<{ empty: boolean }>;
    email: Input<{ empty: boolean; regex: boolean }>;
    message: Input<{ empty: boolean }>;
  };

  const { data, form } = $props();

  let hasHitSubmit = $state(false);
  let isReady = $state(false);
  let isSubmitting = $state(false);

  const formData: FormData = $state({
    name: {
      value: ''
    },
    email: {
      value: ''
    },
    message: {
      value: ''
    }
  });

  const handleSubmit = (event: SubmitEvent) => {
    hasHitSubmit = true;

    const isValid = validateForm();

    if (!isValid) {
      event.preventDefault();
      return;
    }

    isSubmitting = true;
  };

  const validateForm = () => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    const name = formData.name.value.trim();
    const email = formData.email.value.trim();
    const message = formData.message.value.trim();

    formData.name.error = undefined;
    formData.email.error = undefined;
    formData.message.error = undefined;

    if (name.trim() === '') {
      formData.name.error = {
        empty: true
      };
    }

    if (email.trim() === '' || !emailRegex.test(email)) {
      formData.email.error = {
        empty: email.trim() === '',
        regex: !emailRegex.test(email)
      };
    }

    if (message.trim() === '') {
      formData.message.error = {
        empty: true
      };
    }

    return !(formData.name.error || formData.email.error || formData.message.error);
  };

  onMount(() => {
    isReady = true;
  });
</script>

<section class="flex w-full justify-center">
  <div class="container flex max-w-96 flex-col justify-center gap-5 px-5">
    {#if isReady && !$isLoading}
      {#if !form}
        <h2 class="text-center text-4xl">
          {$i18n.t('contact.header')}
        </h2>
        <form method="POST" class="flex flex-col gap-6" novalidate onsubmit={handleSubmit}>
          <label class="relative flex flex-col">
            <span class="mb-1">
              {$i18n.t('contact.form.name')}
            </span>
            <input
              type="text"
              name="name"
              id="name"
              class={`rounded-sm shadow-md ${formData.name.error && 'border-red-400'}`}
              oninput={() => hasHitSubmit && validateForm()}
              bind:value={formData.name.value}
            />
            <div class="relative">
              {#if formData.email.error}
                <span class="absolute text-sm text-red-400">
                  {#if formData.name.error?.empty}
                    {$i18n.t('form.error.required')}
                  {/if}
                </span>
              {/if}
            </div>
          </label>
          <label class="relative flex flex-col">
            <span class="mb-1">
              {$i18n.t('contact.form.email')}
            </span>
            <input
              type="email"
              name="email"
              id="email"
              class={`rounded-sm shadow-md ${formData.email.error && 'border-red-400'}`}
              oninput={() => hasHitSubmit && validateForm()}
              bind:value={formData.email.value}
            />
            <div class="relative">
              {#if formData.email.error}
                <span class="absolute text-sm text-red-400">
                  {#if formData.email.error?.regex}
                    {$i18n.t('form.error.invalidEmail')}
                  {/if}
                </span>
              {/if}
            </div>
          </label>
          <label class="relative flex flex-col">
            <span class="mb-1">
              {$i18n.t('contact.form.message')}
            </span>
            <textarea
              name="message"
              id="message"
              class={`rounded-sm shadow-md ${formData.message.error && 'border-red-400'}`}
              rows="10"
              oninput={() => hasHitSubmit && validateForm()}
              bind:value={formData.message.value}
            ></textarea>
            <div class="relative">
              {#if formData.message.error}
                <span class="absolute text-sm text-red-400">
                  {#if formData.message.error?.empty}
                    {$i18n.t('form.error.required')}
                  {/if}
                </span>
              {/if}
            </div>
          </label>
          <button
            type="submit"
            class="mt-5 rounded-lg bg-blue-500 py-2 font-medium text-white shadow-md hover:bg-blue-600 active:ring-1 active:ring-blue-300 disabled:bg-blue-200"
            disabled={isSubmitting}
          >
            <div class="flex justify-center">
              <span class:hidden={isSubmitting}>{$i18n.t('contact.form.submit')}</span>
              <div class={`opacity-60 ${isSubmitting ? '' : 'hidden'}`}>
                <img src="/images/spinner.svg" alt="Loading" />
              </div>
            </div>
          </button>
        </form>
      {:else}
        <div class="prose flex flex-col gap-5 text-center">
          {#if form.success}
            <h3>
              {$i18n.t('contact.success')}
            </h3>
            <div class="not-prose overflow-hidden rounded-md">
              <img src="/images/thank-you.gif" alt="Thank you Husky" />
            </div>
          {:else}
            <div class="flex flex-col gap-5">
              <h3>
                {$i18n.t('contact.fail')}
              </h3>
              <a href="https://www.linkedin.com/in/gustavommalves/"
                >{$i18n.t('contact.myLinkedInProfile')}</a
              >
            </div>
            <div class="not-prose overflow-hidden rounded-md">
              <img src="/images/not-today.gif" alt="Not today Husky" />
            </div>
          {/if}
        </div>
      {/if}
    {/if}
  </div>
</section>
