import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { reactive } from 'vue';

export const store = reactive({
  user: null,
  profile: null,
  async signUp(email, password) {
    let { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    return (data, error);
  },
  async signIn(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    return (data, error);
  },
  // async fetchUser() {
  //   const user = await supabase.auth.user();
  //   if(user) {
  //     this.user = user;
  //     const { data: profile } = await supabase
  //     .from('profiles')
  //     .select()
  //     .match({ user_id: this.user.id });

  //     if (profile) this.profile = profile[0];
  //     // console.log('user in store: ', this.user);
  //     // console.log('profile in store: ', this.profile);
  //   }
  // },
});

//export default store;
