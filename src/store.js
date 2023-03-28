// Simple store
import { reactive } from 'vue';

export const store = reactive({
  user: null,
  setUser(user) {
    this.user = user
  },
  usersAll: 0,
  setUsersAll(number) {
    this.usersAll = number
  }
})