<template>
  <!-- <div class="container px-10 bg-gray-100"> -->
    <div class="grid grid-cols-2">
      <div class="bg-gray-500 p-3">
        <header>
          <g-link class="text-2xl text-gray-200 my-auto" to="/">{{ $static.metadata.siteName }}</g-link>
        </header>
      </div>
      <div class="flex bg-gray-500 text-gray-200 p-3 my-auto">
        <div class="flex-1"><g-link class="" to="/">Home</g-link></div>
        <div class="flex-1"><g-link class="" to="/blog/">Blog</g-link></div>
        <div class="flex-1"><g-link class="" to="/about/">About</g-link></div>
        <div class="flex-1"><g-link class="" to="/contact/">Contact</g-link></div>
      </div>
      <div class="col-span-2 p-3">
        <slot/>
      </div>
      <div class="col-span-2 bg-gray-300 p-3">
        <footer>
          &copy;2020 Thamizharasu
        </footer>
      </div>
    </div>
  <!-- </div> -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

