import { Roles } from 'src/common/enum';

export interface IToken {
  id: number;
  email: string;
  role: Roles;
}
