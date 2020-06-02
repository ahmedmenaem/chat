/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import TodoMessageBody from "./TodoMessageBody/TodoMessageBody";
import LogMessageBody from "./LogMessageBody/LogMessageBody";

const Message = ({ message }) => {
  const theme = useTheme();
  const style = css`
    display: flex;
    .message {
      display: flex;
      flex-direction: column;
      width: 60%;
      max-width: 80%;

      &.normal__message {
        width: 80%;
      }

      .message__body {
        background-color: ${theme.colors.pale_grey_two};
        border-radius: 20px;
        padding: 20px;
        min-width: 40%;
        position: relative;
        margin: 0;
        margin-right: 35px;
        p {
          color: ${theme.colors.gunmetal};
          font-weight: light;
          font-size: 0.8rem;
        }
      }

      .message__footer {
        display: flex;
        justify-content: space-between;
        .username {
          color: ${theme.colors.gunmetal};
          font-size: 0.8rem;
          font-weight: bolder;
        }
        .avatar {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;

          span {
            color: ${theme.colors.gunmetal};
            font-size: 0.7rem;
            font-weight: lighter;
            margin: 0 5px;
          }

          img {
            width: 30px;
            height: 30px;
          }
        }
        &:not(.me) {
          flex-direction: row-reverse;

          .avatar {
            flex-direction: row;
          }
        }
      }
    }

    &.me {
      justify-content: flex-end;
      .message__body {
        &:before {
          content: "";
          position: absolute;
          z-index: 0;
          bottom: 0;
          right: -8px;
          height: 15px;
          width: 20px;
          background: ${theme.colors.pale_grey_two};
          background-attachment: fixed;
          border-bottom-left-radius: 15px;
        }
        &:after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          right: -10px;
          width: 10px;
          height: 15px;
          background: ${theme.colors.white};
          border-bottom-left-radius: 10px;
        }
      }
    }

    &:not(.me) {
      justify-content: flex-start;
      .message__body {
        margin-left: 35px;
        &:before {
          content: "";
          position: absolute;
          z-index: 0;
          bottom: 0px;
          left: 0px;
          height: 20px;
          width: 5px;
          background: #eee;
          border-bottom-right-radius: 20px;
          transform: rotate(45deg);
        }
        &:after {
          background: ${theme.colors.pale_grey_two};
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0px;
          left: -5px;
          width: 10px;
          height: 10px;
          border-bottom-right-radius: 10px;
          transform: rotate(45deg);
        }
      }
    }
  `;

  return (
    <li className={message.messageSender === "me" ? "me" : ""} css={style}>
      <div
        className={
          message.type === "message" ? "message normal__message" : "message"
        }
      >
        <div className="message__body">
          {message.type === "todo" ? (
            <TodoMessageBody todo={message.todoItem} />
          ) : message.type === "log" ? (
            <LogMessageBody todo={message.todoItem} />
          ) : (
            <p>{message.messageBody}</p>
          )}
        </div>

        {/* Message footer */}
        <div className={message.messageSender + " message__footer"}>
          <span className="username">{message.messageSender}</span>
          <span className="avatar">
            <img src={message.senderAvatar} alt={message.messageSender} />
            <span>{message.sentTime}</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Message;
