import supabase from "../supabase/supabase"

class User {

  async signup(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) throw new Error(error.message)
    console.log(data)

    return data.user
  }

  async signin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw new Error(error.message)
    console.log(data)

    return data.user
  }

  async signout() {
    supabase.auth.signOut()
  }

}

export default new User()