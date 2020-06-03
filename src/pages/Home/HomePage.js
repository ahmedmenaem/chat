/** @jsx jsx */

import SideNav from "../../components/SideNav/SideNav";
import { css, jsx } from "@emotion/core";
import ConversationsList from "../../components/ConversationsList/ConversationsList";
import Chat from "../../components/Chat/Chat";

const HomePage = () => {
  const style = css`
    display: flex;
    width: 100%;
  `;

  return (
    <main css={style}>
      <SideNav />
      <ConversationsList />
      <Chat />
    </main>
  );
};

export default HomePage;
