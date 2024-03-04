"use client";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export function DashboardMenu() {
  return (
    <div className="">
      <Card
        className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#DAD7D0] flex flex-col gap-4 items-center justify-center"
        placeholder={undefined}
      >
        <List placeholder={undefined}>
          <Link href={"/dashboard"}>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link href={"/dashboard/notes"}>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Notes
            </ListItem>
          </Link>
          <Link href={"/dashboard/todo"}>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Todo
            </ListItem>
          </Link>
          <Link href={"/dashboard/planner-pro"}>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Planner Pro
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-500" />

          <ListItem placeholder={undefined}>
            <ListItemPrefix placeholder={undefined}>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <Link href={"/auth/logout"}>
            <ListItem placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </Link>
        </List>
      </Card>
    </div>
  );
}
