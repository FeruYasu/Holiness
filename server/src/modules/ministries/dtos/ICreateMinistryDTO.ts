interface ILeaders {
  user_id: string;
}

export default interface ICreateMinistryDTO {
  name: string;
  local?: string;
  date?: Date;
  hour?: Date;
  leaders?: ILeaders[];
}
