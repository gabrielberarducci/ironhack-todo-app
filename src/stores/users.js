import { defineStore } from "pinia";
import { supabase } from "../supabase";

// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})








const signUp(email, password) => {
let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })
}