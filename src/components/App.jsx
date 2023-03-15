import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import {Friends} from "./Friends/Friends";
import user from "data.json/user.json";
import data from "data.json/data.json";
import friends from "data.json/friends.json";


export const App = () => {
  return (
    <>
      <Profile
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />;
    </>
  );
};
