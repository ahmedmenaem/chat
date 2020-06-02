/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { loadConversations } from "../../api/conversations";
import ConversationItem from "./ConversationItem/ConversationItem";
import Header from "../Header/Header";

const ConversationsList = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    loadConversationList();
  }, []);

  const loadConversationList = async () => {
    const conversations = await loadConversations();
    setConversations(conversations);
  };

  const style = css`
    width: 20%;
    height: 100vh;
    position: relative;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      padding-top: 60px;
      height: calc(100vh - 60px);
      overflow: auto;
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: #ededed;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #c5d2d4;
        border-radius: 50px;
      }
    }
  `;

  return (
    <aside css={style}>
      <Header
        title={"Conversations"}
        actions={[
          <div>
            <img src={"/assets/new_conversation.png"} alt="new_conversation" />
          </div>,
        ]}
        backgroundColor="#aaaaaa"
      />

      <section>
        <ul>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default ConversationsList;
