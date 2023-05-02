"use client";

import useUsers from "@/hooks/useUsers";
import Avatar from "./Avatar";

const ExploreUsersFeed = () => {
    const { data: users = []} = useUsers();
  
    if (users.length === 0){
      return null;
    }

  if (users.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No Users
      </div>
    )
  }
  
  return ( 
    <div className="flex flex-col">
          {users.map((user:Record<string, any>) => (
            <div key={user.id} className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="
                text-white 
                font-semibold 
                text-sm
                ">
                  {user.name}
                  </p>
                  <p className= "text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
   );
}
 
export default ExploreUsersFeed;