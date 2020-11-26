<template>
    <Layout>
      <section class="">
        <h1 class="text-4xl">{{ $page.post.title }} </h1>
        <p class="text-gray-400 text-sm my-2">Posted on {{ $page.post.date }}</p>
        <div class="grid grid-cols-4 gap-4">
          <div class="col-start-1 col-end-4">
            <article class="col-start-1 col-end-4 prose max-w-none" v-html="$page.post.content" />
            <div class="border mt-5 p-2">
              <h3 class="text-lg font-semibold text-indigo-400">About Tham</h3>
              <div class="flex">
                <div class="flex-shrink-0 mr-5">
                  <img class="w-24 h-24 rounded-full my-auto" src="../assets/tham.png" alt="">
                </div>
                <div>
                  <span class="block">
                    Thamizharasu is an API Evangalist, Growth coach and open community contributor. Passionate about technology and business growth coaching.
                  </span>
                  <span class="block">Social icons</span>
                </div>
              </div>
            </div>
          </div>

          <div class="">
            <div class="border mb-3">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
              </svg> -->
              <div class="bg-indigo-500 bg-opacity-75 text-gray-200 p-2">
                Author
              </div>
              <div class="p-2">
                Author box content
              </div>
            </div>
            <div class="border mb-3">
              <div class="bg-indigo-500 bg-opacity-75 text-gray-100 p-2">
                Newsletter
              </div>
              <div class="p-2">
                Newsletter box content
              </div>
            </div>
            <div class="border mb-3">
              <div class="bg-indigo-500 bg-opacity-75 text-gray-200 p-2">
                Social
              </div>
              <div class="p-2">
                Social box content
              </div>
            </div>
            <div class="border mb-3">
              <div class="bg-indigo-500 bg-opacity-75 text-gray-200 p-2">
                Further reading
              </div>
              <div class="p-2">
                Further reading box content
              </div>
            </div>
          </div>
        </div>
      </section>        
        <!-- <article>
            <h1>{{ $page.post.title }} </h1>

            <div>
                Tags:
                <g-link
                    v-for="tag in $page.post.tags"
                    :to="tag.path"
                    :key="tag.id">
                #{{ tag.title }}
                </g-link>
            </div>

            <p>Posted on {{ $page.post.date }}</p>

            <div class="markdown-body mb-8" id="article-area" v-html="$page.post.content" />
        </article> -->
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
  export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>