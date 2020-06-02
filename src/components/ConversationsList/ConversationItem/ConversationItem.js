/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const ConversationItem = ({ conversation }) => {
  const theme = useTheme();

  const style = css`
    display: block;
    border-bottom: 2px solid ${theme.colors.pale_grey_four};
    background-color: ${
      conversation.active ? theme.colors.pale_grey_three : "transparent"
    };
    &:hover {
      background-color: ${theme.colors.pale_grey_three};
      cursor: pointer;
    }

    div.conversation {
      padding: 15px;
      display: flex;
      align-items: center;

      .avatar {
        width: 25%;
        display: flex;
        justify-content: center;

        div {
            background-color: ${theme.colors.pale_grey_three};
            border-radius: 100%;
            width: 50px;
            height: 50px;
            background-image: url("${conversation.avatar}");
            background-size: cover;
            border: ${
              conversation.unSeenMessages > 0
                ? "2px solid " + theme.colors.gunmetal_70
                : "none"
            }
        }
      }

    div.conversation__body {
        display: flex;
        width: 75%;
        flex-direction: column;
        p {
            overflow: hidden;
            white-space: nowrap; 
            text-overflow: ellipsis;
            margin: 0;
            display: flex;
            justify-content: space-between;
            color: ${theme.colors.gunmetal};
            font-weight: light;
            span {
                margin: 3px 0;
                display: inline-block;

                &.conversation_date {
                    color: ${theme.colors.gunmetal};
                    font-size: 0.7rem;
                }
            }
        }
        p.conversation__username {
            font-weight: bold;
            font-size: 0.8rem;
        }

        .conversation__message {
            margin: 0;
            display: flex;
            justify-content: space-between;
            .conversation__message_body {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
                width: 60%;
                font-weight: light;
                font-size: 0.8rem;
            }
            .conversation__message_badge {
                display: inline-block;
                background-color: ${theme.colors.gunmetal_70};
                color: ${theme.colors.white};
                border-radius: 10px;
                width: 30px;
                text-align: center;
            }
        }

    }
}`;

  return (
    <li css={style}>
      <div className="conversation">
        <div className="avatar">
          <div></div>
        </div>

        <div className="conversation__body">
          <p>
            <span className="conversation_group_name">
              {conversation.groupName}
            </span>
            <span className="conversation_date">
              {conversation.lastMessageDate}
            </span>
          </p>
          <p className="conversation__username">{conversation.userName}</p>
          <p className="conversation__message">
            <span className="conversation__message_body">
              {conversation.message}
            </span>

            {conversation.unSeenMessages > 0 ? (
              <span className="conversation__message_badge">
                {conversation.unSeenMessages}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ConversationItem;
