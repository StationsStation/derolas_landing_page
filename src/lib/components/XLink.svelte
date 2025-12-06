<script lang="ts">
  export let handle: string;
  export let href: string;
</script>

<a class="x-link" href={href} rel="noreferrer" target="_blank">
  <span class="icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4L20 20"/><path d="M4 20L20 4"/></svg>
  </span>
  <span class="handle">{handle}</span>
  <span class="icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  </span>
</a>

<style>
 .x-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    border-radius: 999px;
    border: 1.5px solid rgba(82, 114, 103, 0.5);
    background: rgba(12, 18, 16, 0.7);
    width: max-content;
    color: #cdd9d3;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 12px 24px rgba(0, 0, 0, 0.3);
    transition: transform 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
  }
  .x-link:hover {
    border-color: rgba(82, 114, 103, 0.8);
    background: rgba(15, 24, 20, 0.85);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 14px 26px rgba(0, 0, 0, 0.32);
  }
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #cdd9d3;
  }
  .handle {
    font-size: 1.1rem;
    color: #dfe8e2;
  }
</style>
