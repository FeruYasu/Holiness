interface ILeaders {
  user_id: string;
}

export default interface IUpdateMinistryUsersDTO {
  ministryId: string;
  leaders: ILeaders[];
}
