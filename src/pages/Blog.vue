<template>
  <Layout>
    <h1 class="text-2xl mb-2 text-pink-900">
      Popular articles
    </h1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="post in $page.posts.edges" :key="post.id">
        <div class="border border-gray-200">
          <g-image alt="Example image" :src="require(`!!assets-loader!@images/${post.node.thumbnail}`)" width="150" />
          <div class="p-2">
            <p class="text-xs text-gray-400 py-2">
              <time :datetime="post.node.date">{{ post.node.date }}</time>
            </p>
            <h2 class="text-xl text-pink-400">
              <g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link>
            </h2>
            <p class="text-gray-600 text-xs">{{ post.node.summary }}</p>
            <div class="mt-2">
              <div class="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">T</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="post in $page.posts.edges" :key="post.id" >
        <g-image alt="Example image" :src="require(`!!assets-loader!@images/${post.node.thumbnail}`)" width="150" />
        <h2 class="text-xl font-medium text-black">
          <g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link>
        </h2>
        <p class="text-xs text-gray-500">Posted on <time :datetime="post.node.date">{{ post.node.date }}</time></p>

        <p>{{ post.node.summary }}</p>
      </div> -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path,
        thumbnail
      }
    }
  }
}
</page-query>
