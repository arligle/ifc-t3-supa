import React from "react";

export const Navbar = () => {
  return (
    <div className=" border-b">
      <div className=" flex h-16 items-center px-4">
        <p>This is navbar</p>
        {/* routes */}

        {/* userprofile */}
        <UserButton />
      </div>
    </div>
  );
};
