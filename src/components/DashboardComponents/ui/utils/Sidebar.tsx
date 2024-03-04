import React, { useEffect } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
  Input,
  Drawer,
  Card,
  Button,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartBarIcon,
  InboxIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";
import Link from "next/link";

export function SidebarWithBurgerMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  //  show sidebar menus if user logged in

  const [showMenus, setShowMenus] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowMenus(true);
    }

    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        setIsLoggedIn(true);
        setUsername(localStorage.getItem("username") || ""); // Fix: Provide a default value for setUsername state setter function
      }
    }
  }, [isLoggedIn, showMenus]);

  return (
    <>
      <IconButton
        variant="text"
        size="lg"
        onClick={openDrawer}
        placeholder={undefined}
      >
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} placeholder={undefined}>
        {showMenus ? (
          <Card
            color="transparent"
            shadow={false}
            className="h-[calc(100vh-2rem)] w-full p-4"
            placeholder={undefined}
          >
            <div className="mb-2 flex items-center gap-4 p-4">
              <Typography
                variant="h5"
                color="blue-gray"
                placeholder={undefined}
              >
                Do Note
              </Typography>
            </div>

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

              <hr className="my-2 border-blue-gray-50" />

              <div className="">
                <Link href={`/profile/${username}`}>
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                  </ListItem>
                </Link>
                <Link href={"/auth/logout"}>
                  <ListItem placeholder={undefined}>
                    <ListItemPrefix placeholder={undefined}>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                </Link>
              </div>
            </List>

            <Alert
              open={openAlert}
              className="mt-auto"
              onClose={() => setOpenAlert(false)}
            >
              <CubeTransparentIcon className="mb-4 h-12 w-12" />
              <Typography variant="h6" className="mb-1" placeholder={undefined}>
                Upgrade to PRO
              </Typography>
              <Typography
                variant="small"
                className="font-normal opacity-80"
                placeholder={undefined}
              >
                Upgrade to Material Tailwind PRO and get even more components,
                plugins, advanced features and premium.
              </Typography>
              <div className="mt-4 flex gap-3">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-medium opacity-80"
                  onClick={() => setOpenAlert(false)}
                  placeholder={undefined}
                >
                  Dismiss
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-medium"
                  placeholder={undefined}
                >
                  Upgrade Now
                </Typography>
              </div>
            </Alert>
          </Card>
        ) : (
          <div className="h-full w-full flex flex-col justify-center items-center">
            <Button
              className="mt-6 w-fit text-center mx-auto px-20"
              fullWidth
              placeholder={undefined}
              onClick={() => {
                router.push("/auth/login");
                setIsDrawerOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        )}
      </Drawer>
    </>
  );
}
