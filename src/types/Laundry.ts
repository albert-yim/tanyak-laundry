import {User} from "./User"

export type Dryer = {
    user: User,
    mode: "regular" | "else",
    startTime: string,
    endTime: string,
    position: 1 | 2 | 3 | 4 ,
  }

export type Laundry = {
    user: User,
    mode: "표준세탁" | "강력세탁" | "청정세탁" | "울/란제리" | "합성섬유" | "헹굼+탈수",
    startTime: string,
    endTime: string,
    position: 1 | 2 | 3 | 4 ,

}