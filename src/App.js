import user from './user.json';
import User from './components/User/User';

import friends from './friends.json';
import FriendList from './components/Friends/FriendList';

import statisticalData from './statistical-data.json';
import StatList from './components/Statistics/Statistics';

import transaction from './transactions.json';
import TransactionHistory from './components/Transaction/Transaction';


export default function App() {
  const {avatar, name, tag, location, stats} = user;
 
  return(
    <> 
   <User 
avatar={avatar} 
name={name}
tag={tag}
location={location}
statsFollowers={stats.followers}
statsViews={stats.views}
statsLikes={stats.likes}
  /> 
   
<FriendList 
items={friends} 

/>

<StatList title="Upload stats" stats={statisticalData} />
<StatList stats={statisticalData} />

<TransactionHistory items={transaction} />
   </>
  )
}

