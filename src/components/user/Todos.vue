<template>
  <ul class="list__todos">
    <li
      class="list__todo"
      v-for="list in lists"
      :key="list.id"
      :class="{ checked: list.completed }"
    >
      <font-awesome-icon
        v-if="list.completed"
        :icon="['fas', 'toggle-on']"
        class="icon-check"
      />
      <font-awesome-icon
        v-else
        :icon="['fas', 'toggle-off']"
        class="icon-check"
      />
      <span>Title: {{ list.title }}</span>
      <font-awesome-icon
        :key="favoritesKey"
        :icon="['fas', 'star']"
        :title="list.favorites ? 'Remove from favorites' : 'Add to favorites'"
        :color="list.favorites ? '#ffc917' : null"
        class="list__favorites"
        @click="checkFavorites(list.id)"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Todos",
  props: {
    lists: {
      type: Array,
      required: true,
    },
    favoritesKey: {
      type: Number,
      required: true,
    },
  },
  methods: {
    checkFavorites(id) {
      this.$emit("favorites", id);
    },
  },
};
</script>

<style></style>
