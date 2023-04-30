// components
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

// data
import user from '../../data/user.json';
import data from '../../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </div>
  );
};
