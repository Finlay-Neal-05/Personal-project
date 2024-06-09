export interface User {
  username: string
  password: string
}

export interface UserData extends User {
  id: number
}
