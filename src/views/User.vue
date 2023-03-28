<template>
  <div class="about">
    <div v-if="user" class="block__user">
      <div>{{ user.id }}</div>
      <div>{{ user.username }}</div>
      <div>{{ user.phone }}</div>
    </div>
    <AddTodo @update:todo="updateTodo" />
    <div v-if="lists" class="block__list">
      <div class="block__filter">
        <select name="filter" class="select" @change="changeStatusFilter">
          <option value="" class="select--option">All</option>
          <option value="completed" class="select--option">Completed</option>
          <option value="uncompleted" class="select--option">
            Uncompleted
          </option>
          <option value="favorites" class="select--option">Favorites</option>
        </select>
        <select name="filter" class="select" @change="changeIdFilter">
          <option value="">All</option>
          <option
            :value="id"
            v-for="id in user.allUsers"
            :key="id"
            class="select--option"
          >
            {{ id }}
          </option>
        </select>
        <div>
          <Input
            type="text"
            v-model="titleFilter"
            placeholder="Введіть дані для фільтрації"
          />
        </div>
      </div>
      <ul v-for="list in filteredItems" :key="list.id" class="list__todos">
        <li class="list__todo" :class="{ checked: list.completed }">
          <font-awesome-icon
            v-if="list.completed"
            :icon="['fas', 'toggle-on']"
          />
          <font-awesome-icon v-else :icon="['fas', 'toggle-off']" />
          <span>Title: {{ list.title }}</span>
          <font-awesome-icon
            :key="favoritesKey"
            :icon="['fas', 'star']"
            :color="list.favorites ? 'red' : null"
            class="list__favorites--icon"
            @click="checkFavorites(list.id)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.list__todo {
  border-bottom: 1px dashed paleturquoise;
  margin: 10px auto;
  list-style: none;
}

.list__todo.checked {
  text-decoration: line-through;
}

.list__todo span {
  margin-right: 10px;
}
.list__favorites--icon {
  cursor: pointer;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import api from "@/api";
import { store } from "@/store";
import AddTodo from "../components/user/AddTodo.vue";
import Input from "../components/ui/Input.vue";
export default {
  name: "User",
  components: { AddTodo, Input },
  data() {
    return {
      user: store.user || null,
      lists: null,
      listsLocal: null,
      statusFilter: "",
      idFilter: "",
      titleFilter: "",
      favoritesKey: 0,
    };
  },
  async mounted() {
    this.lists = await api.getTodoList();
    const retString = localStorage.getItem("favorites");
    const retArray = JSON.parse(retString) || [];
    if (retArray) {
      this.lists.map((list) => {
        if (retArray.includes(list.id)) list.favorites = true;
      });
    }
  },
  computed: {
    filterCompleted() {
      return this.statusFilter !== "" && this.statusFilter === "completed"
        ? (item) => item.completed
        : null;
    },
    filterUncompleted() {
      return this.statusFilter !== "" && this.statusFilter === "uncompleted"
        ? (item) => !item.completed
        : null;
    },
    filterFavorites() {
      return this.statusFilter !== "" && this.statusFilter === "favorites"
        ? (item) => item.favorites
        : null;
    },
    filterUserId() {
      return this.idFilter !== ""
        ? (item) => item.userId === Number(this.idFilter)
        : null;
    },
    filterTitle() {
      return this.titleFilter !== ""
        ? (item) => item.title.includes(this.titleFilter)
        : null;
    },
    filters() {
      return [
        this.filterCompleted,
        this.filterUncompleted,
        this.filterFavorites,
        this.filterUserId,
        this.filterTitle,
      ].filter(Boolean);
    },
    filteredItems() {
      return this.filters.length
        ? this.lists.filter((item) => this.filters.every((f) => f(item)))
        : this.lists;
    },
    favorites() {
      return this.favoritesArr.includes(this.lists.id);
    },
  },
  methods: {
    changeStatusFilter({ target: { value } }) {
      this.statusFilter = value;
    },
    changeIdFilter({ target: { value } }) {
      this.idFilter = value;
    },
    async checkFavorites(id) {
      const retString = localStorage.getItem("favorites");
      let retArray = JSON.parse(retString) || [];
      this.lists.map((list) => {
        if (list.id === id) {
          if (list.favorites) {
            list.favorites = false;
            retArray = retArray.filter((item) => Number(item) !== Number(id));
          } else if (!list.favorites) {
            list.favorites = true;
            if (!retArray.includes(id)) retArray.push(id);
          }
        }
      });
      this.favoritesKey += 1;
      localStorage.setItem("favorites", JSON.stringify(retArray));
    },
    updateTodo(newTodo) {
      this.lists.push(newTodo);
    },
  },
};
</script>
