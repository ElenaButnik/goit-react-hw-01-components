import user from './user.json';
import User from './componentsUser/User';

import friends from './friends.json';
import FriendList from './componentsFriends/FriendList';

import statisticalData from './statistical-data.json';
import StatList from './componentsStatistics/Statistics';


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
   
<FriendList items={friends} />

<StatList title stats={statisticalData} />

   </>
  )
    
 
  
  
    
  
}

