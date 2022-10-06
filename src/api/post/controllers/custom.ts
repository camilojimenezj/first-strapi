
export default {

  async findPosts(ctx) {

    const response = await strapi.service("api::post.custom")

    return response;
  },
}
