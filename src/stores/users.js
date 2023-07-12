import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { ref, reactive } from 'vue';

export const store = reactive({
  user: null,
  profile: null,
  
  //Signup is the function that we use to register new users in our website.
  //This function calls a method defined in the Supabase documentation (supabase.auth.signUp)
  //and passes it the email and password parameters.
  //This function connects to supabase using the credentials defined in the supabase.js file.  
  async signUp(email, password) {
    let { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) throw error;
    return (data, error);
  },

  //Signin is the function that we use to login users in our website.
  //This function calls a method defined in the Supabase documentation (supabase.auth.signInWithPassword)
  //and passes it the email and password parameters.
  //This function connects to supabase using the credentials defined in the supabase.js file. 
  async signIn(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    //It is important to carry out error handling within this function, so that when calling it from SignIn.vue
    //the login works correctly.
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
