/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const MessageFooter = ({ sender, sentTime, senderAvatar }) => {
  const theme = useTheme();
  const style = css`
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
  `;
  return (
    <div css={style} className={sender}>
      <span className="username">{sender}</span>
      <span className="avatar">
        <img src={senderAvatar} alt={sender} />
        <span>{sentTime}</span>
      </span>
    </div>
  );
};
export default MessageFooter;
