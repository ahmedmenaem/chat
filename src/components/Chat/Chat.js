/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { loadConversationMessages } from "../../api/conversations";
import { useTheme } from "emotion-theming";
import Header from "../Header/Header";
import ChatFooter from "./ChatFooter/ChatFooter";
import Message from "./Message/Message";

const buttonStyleBase = css`
  background-color: transparent;
  border: 0;
  outline: none;
`;

const buttonStyle = css`
  padding: 5px;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const MainChat = () => {
  const theme = useTheme();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadConversationMessagesList();
  }, []);

  const loadConversationMessagesList = async () => {
    const messages = await loadConversationMessages(1);
    setMessages(messages);
  };

  const style = css`
    width: 80%;
    height: 100vh;
    position: relative;

    section {
      padding: 80px 20px 40px 20px;
      height: calc(100vh - 130px);
      overflow: auto;
      p.note {
        text-align: center;
        font-weight: bold;
        color: ${theme.colors.gunmetal};
        font-size: 0.8rem;
        span {
          font-weight: lighter;
        }
      }
      ul {
        list-style: none;
        padding: 10px;
      }
    }
  `;

  return (
    <main css={style}>
      <Header
        title="Mom’s Discharge Plan"
        actions={[
          <button css={[buttonStyleBase, buttonStyle]}>
            <img src={"/assets/group_chat.png"} alt="group_conversation" />
          </button>,
          <button css={[buttonStyleBase, buttonStyle]}>
            <img src={"/assets/filter.png"} alt="new_conversation" />
          </button>,
          <button css={[buttonStyleBase, buttonStyle]}>
            <img src={"/assets/search.png"} alt="new_conversation" />
          </button>,
        ]}
      />
      <section>
        <p className="note">
          Starter Care Plan created + daily actions added <span>12:10p</span>
        </p>
        <ul>
          {messages.map((message, index) => {
            return <Message message={message} key={index} />;
          })}
        </ul>
      </section>
      <ChatFooter />
    </main>
  );
};

export default MainChat;
