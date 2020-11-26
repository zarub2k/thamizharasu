<template>
    <Layout>
      <section class="">
        <h1 class="text-4xl">{{ $page.post.title }} </h1>
        <p class="text-gray-400 text-sm my-2">Posted on {{ $page.post.date }}</p>
        <div class="grid grid-cols-4 gap-4">
          <article class="col-start-1 col-end-4 prose max-w-none" v-html="$page.post.content" />
          <div class="border">
            <div class="border">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
              Author box
            </div>
            <div class="border">
              Newsletter subscription
            </div>
            <div class="border">
              Social box
            </div>
            <div class="border">
              Further reading
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