import React from "react";
import * as icons from "@mui/icons-material";

const Page404 = () => {
  const menuItems2 = [
    { label: "Home", path: "./home", icon: "Home" },
    { label: "Accounts", path: "./accounts", icon: "AccountCircle" },
    { label: "Organizations", path: "./organizations", icon: "Build" },
  ];

  return (
    <>
      {menuItems2.map((menuItem) => {
        const Icon = icons[menuItem.icon];

        return (
          <span key={menuItem.path}>
            {menuItem.label} <Icon />
          </span>
        );
      })}
    </>
  );
};

export default Page404;
