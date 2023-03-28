<template>
  <div class="user">
    <TableUser />
    <div class="user__wrapp">
      <div class="user__add">
        <AddTodo @update:todo="updateTodo" />
      </div>

      <div v-if="lists" class="user__todos">
        <div class="user__filter">
          <div class="user_select">
            <Select v-model="statusFilter" label="Фільтр по статусу">
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
              <option value="favorites">Favorites</option>
            </Select>

            <Select v-model="idFilter" label="Фільтр по ID юзера">
              <option value="">All</option>
              <option :value="id" v-for="id in usersAll" :key="id">
                {{ id }}
              </option>
            </Select>
          </div>

          <div class="user_inputSearch">
            <Input
              type="text"
              v-model="titleFilter"
              placeholder="Введіть дані для фільтрації"
            />
          </div>
        </div>
        <Todos
          :lists="filteredList"
          :favoritesKey="favoritesKey"
          @favorites="checkFavorites"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { store } from "@/store";
import AddTodo from "@/components/user/AddTodo.vue";
import Input from "@/components/ui/Input.vue";
import Select from "@/components/ui/Select.vue";
import TableUser from "@/components/user/TableUser.vue";
import Todos from "../components/user/Todos.vue";

export default {
  name: "User",
  components: { AddTodo, Input, TableUser, Select, Todos },
  data() {
    return {
      usersAll: store.usersAll || null,
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

    this.lists.map((list) => {
      if (retArray.includes(list.id)) list.favorites = true;
    });
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
    filteredList() {
      return this.filters.length
        ? this.lists.filter((item) => this.filters.every((f) => f(item)))
        : this.lists;
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
            retArray.push(id);
          }
        }
      });

      // for updating deep data
      this.favoritesKey += 1;

      localStorage.setItem("favorites", JSON.stringify(retArray));
    },
    updateTodo(newTodo) {
      this.lists.unshift(newTodo);
    },
  },
};
</script>
