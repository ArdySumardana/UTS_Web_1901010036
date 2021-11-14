const app = Vue.createApp({
  data() {
    return {
      buy: 'Buy',
      remove: 'Cancel',
      cart: 0,
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
});
