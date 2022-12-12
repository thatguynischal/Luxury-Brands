import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <div className="ml-11">
        <p>CHAL</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="hidden sm:block">
          <div className="mr-11 flex gap-10">
            <p>Home</p>
            <p>About Me</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="sm:hidden mr-11">
          <Menu>
            <MenuHandler>
              <Button className="bg-nischal">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About Me</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Home;
