<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="">
      <header>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </header></div>
    <div class="">
      <div class="flex">
        <div class="flex-1"><g-link class="" to="/">Home</g-link></div>
        <div class="flex-1"><g-link class="nav__link" to="/blog/">Blog</g-link></div>
        <div class="flex-1"><g-link class="nav__link" to="/about/">About</g-link></div>
        <div class="flex-1"><g-link class="nav__link" to="/contact/">Contact</g-link></div>
      </div>
    </div>
    <div class="col-span-2 ...">
      <slot/>
    </div>
    <div class="col-span-2 ...">
      <footer class="bg-gray-300 h-10">
        &copy;2020 Thamizharasu
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

