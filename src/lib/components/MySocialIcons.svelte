<script lang="ts">
  import SocialIcons from '@rodneylab/svelte-social-icons';
  
const {
    fgColor,
    bgColor,
    hasBorder = true
  }: { fgColor: string; bgColor: string; hasBorder?: boolean } = $props();
</script>

<div class="flex items-start justify-center gap-10">
  <a
    class={`flex rounded-lg opacity-75 hover:opacity-100 ${hasBorder ? 'border border-white' : ''}`}
    href="https://github.com/gminetoma"
    target="_blank"
  >
    <SocialIcons height="55" width="55" network="github" {fgColor} {bgColor} />
  </a>
  <a
    class={`flex rounded-lg opacity-75 hover:opacity-100 ${hasBorder ? 'border border-blue-500' : ''}`}
    href="https://www.linkedin.com/in/gustavommalves/"
    target="_blank"
  >
    <SocialIcons height="55" width="55" network="linkedin" {fgColor} {bgColor} />
  </a>
  <a
    class={`flex rounded-lg opacity-75 hover:opacity-100 ${hasBorder ? 'border border-gray-500' : ''}`}
    href="mailto:gminetoma@gmail.com"
  >
    <SocialIcons height="55" width="55" network="email" {fgColor} {bgColor} />
  </a>
</div>
