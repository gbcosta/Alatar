import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdOutlineTipsAndUpdates, MdVideogameAsset } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { BsSave2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
interface MenuItemProps {
  icon: any;
  children?: any;
  activeTab: string;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Flex
      sx={{
        padding: 2,
        color: "white.600",
        bgColor: props.children != props.activeTab ? "black.700" : "black.500",
        alignItems: "center",
        _hover: { cursor: "pointer", backgroundColor: "black.500" },
      }}
    >
      <Icon w={5} h={5} as={props.icon} sx={{ ml: 4 }}></Icon>
      <Text ml={4}>{props.children}</Text>
    </Flex>
  );
};

export const HomeMenu = (props: { activeTab: string }) => {
  return (
    <Flex
      sx={{
        backgroundColor: "black.700",
        height: "100vh",
        minWidth: 250,
        borderRight: "3px solid #444",
        alignItems: "right",
        flexDir: "column",
        mt: 4,
      }}
    >
      <Link to="/">
        <MenuItem icon={MdOutlineTipsAndUpdates} activeTab={props.activeTab}>
          New Sheet
        </MenuItem>
      </Link>

      <MenuItem icon={IoMdCreate} activeTab={props.activeTab}>
        Open Sheet
      </MenuItem>
      <Link to="/newGame">
        <MenuItem icon={MdVideogameAsset} activeTab={props.activeTab}>
          New Game
        </MenuItem>
      </Link>

      <MenuItem icon={BsSave2Fill} activeTab={props.activeTab}>
        Saved Games
      </MenuItem>
    </Flex>
  );
};
