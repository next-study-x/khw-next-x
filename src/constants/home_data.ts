import { SvgIconComponent } from "@mui/icons-material";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleIcon from "@mui/icons-material/People";
import ClearIcon from "@mui/icons-material/Clear";
import BoltIcon from "@mui/icons-material/Bolt";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// 라우터 관리로 바꾸기
interface MenuData {
  name: string;
  link: string;
  icon: SvgIconComponent;
}

export const HOME_DATA: { [key: string]: MenuData } = {
  home: {
    name: "Home",
    link: "home",
    icon: HomeIcon,
  },
  explore: {
    name: "Explore",
    link: "explore",
    icon: SearchIcon,
  },
  // notification: {
  //   name: "Notification",
  //   icon: NotificationsNoneIcon,
  // },
  message: {
    name: "Message",
    link: "message",
    icon: MailOutlineIcon,
  },
  // grok: {
  //   name: "Grok",
  //   icon: LaunchIcon,
  // },
  // bookmarks: {
  //   name: "Bookmarks",
  //   icon: BookmarkBorderIcon,
  // },
  // communities: {
  //   name: "Communities",
  //   icon: PeopleIcon,
  // },
  // premium: {
  //   name: "Premium",
  //   icon: ClearIcon,
  // },
  // verifiedOrgs: {
  //   name: "Verified Orgs",
  //   icon: BoltIcon,
  // },
  profile: {
    name: "Profile",
    link: "rkdrrkak",
    icon: PersonIcon,
  },
  // more: {
  //   name: "More",
  //   icon: MoreHorizIcon,
  // },
};
