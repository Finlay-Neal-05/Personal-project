export interface UserInfo {
  userId: number
  goalsCompleted: number
  goalsFailed: number
}

export interface UserInfoData extends UserInfo {
  id: number
}
