/** @jsx jsx */

import SideNav from "../../components/SideNav/SideNav";
import { css, jsx } from "@emotion/core";
import ChatList from "../../components/ConversationsList/ConversationsList";
import MainChat from "../../components/Chat/Chat";

const HomePage = () => {
  const style = css`
    display: flex;
    width: 100%;
  `;

  return (
    <main css={style}>
      <SideNav />
      <ChatList />
      <MainChat />
    </main>
  );
};

export default HomePage;
