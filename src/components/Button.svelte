<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';

  type Variants = 'dev-red' | 'dev-green' | 'primary' | 'secondary' | 'alert';
  export let ariaLabel: string | undefined = undefined;
  export let disabled = false;
  export let handleClick: MouseEventHandler<HTMLButtonElement>;
  export let type: 'button' | 'submit' | 'reset' = 'submit';
  export let variant: Variants | undefined = undefined;
  export let width: 'fit-content' | 'full' = 'fit-content';
</script>

<button
  aria-label={ariaLabel}
  on:click={handleClick}
  class={variant}
  class:full={width === 'full'}
  disabled={disabled}
  type={type}
>
  <!-- eslint-disable-next-line svelte/html-self-closing -->
  <slot />
</button>

<style>
  button {
    --background-color: #009e20;
    --border-color: transparent;
    --width: fit-content;
    font-size: 1rem;
    color: var(--color-light-1);
    background-color: var(--background-color);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius-1);
    padding: 0.4rem 1rem;
    width: var(--width);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 0.3rem;
  }

  button:is(:hover):not(:disabled) {
    filter: brightness(1.2);
    box-shadow: var(--box-shadow-hover);
  }

  button:disabled {
    opacity: 0.5;
  }

  .full {
    --width: 100%;
  }

  .dev-red {
    --background-color: crimson;
    --border-color: #ffcd07;
  }

  .dev-green {
    --background-color: #009e20;
    --border-color: #ffcd07;
  }

  .primary {
    --background-color: #9328cc;
  }

  .secondary {
    --background-color: transparent;
    color: var(--color-dark-1);
    --border-color: var(--color-dark-1);
  }

  .alert {
    --background-color: transparent;
    color: crimson;
    --border-color: crimson;
  }
</style>
