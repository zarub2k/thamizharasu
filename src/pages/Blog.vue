<template>
  <Layout>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="post in $page.posts.edges" :key="post.id" >
        <h2 class="text-xl font-medium text-black">
          <g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link>
        </h2>
        <p class="text-xs text-gray-500">Posted on <time :datetime="post.node.date">{{ post.node.date }}</time></p>

        <p>{{ post.node.summary }}</p>
      </div>
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
        path
      }
    }
  }
}
</page-query>
