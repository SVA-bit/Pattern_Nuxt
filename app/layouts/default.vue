<template>
  <div class="min-h-screen flex flex-col">
    <LayoutsNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutsFooter />
  </div>
</template>
