/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

const ChatFooter = ({
  onSendButtonClick = () => {},
  onPlusButtonClick = () => {},
}) => {
  const theme = useTheme();

  const style = css`
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;
    padding: 10px 0;
    background-color: ${theme.colors.dark_white};
    display: flex;

    .plus_button {
      width: 5%;
      display: flex;
      justify-content: center;

      button {
        background-color: transparent;
        border: 0;
        outline: none;
        background-color: ${theme.colors.white};
        border-radius: 100%;
        padding: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .chat__input {
      width: 90%;
      input {
        width: 100%;
        height: 30px;
        padding: 5px;
        border-radius: 15px;
        border: 1px solid ${theme.colors.white};
        outline: none;
        &::placeholder {
          color: #afafb3;
          font-weight: light;
          font-size: 15px;
        }

        &:focus {
          border: 1px solid #afafb3;
        }
      }
    }

    .send_button {
      width: 5%;
      display: flex;
      justify-content: center;

      button {
        border: 0;
        outline: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `;

  return (
    <footer css={style}>
      <div className="plus_button">
        <button onClick={onPlusButtonClick}>
          <img src={"/assets/plus.png"} alt="new_conversation" />
        </button>
      </div>
      <div className="chat__input">
        <input placeholder={"message"} />
      </div>
      <div className="send_button">
        <button onClick={onSendButtonClick}>
          <img src={"/assets/send.png"} alt="new_conversation" />
        </button>
      </div>
    </footer>
  );
};

export default ChatFooter;
