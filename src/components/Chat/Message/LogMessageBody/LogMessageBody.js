/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LogMessageBody = (log) => {
  const style = css`
    .log__header {
      font-weight: light;
      color: #546566;
      font-size: 0.9rem;
      margin-bottom: 10px;
    }

    .log__body {
      display: flex;
      align-items: center;
      color: #546566;
      font-size: 0.7rem;
      img {
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0;
      }
    }

    .log__footer {
      margin-top: 15px;
      color: #546566;
      font-size: 0.7rem;
      display: flex;
      justify-content: space-between;

      .log__footer_main {
        display: flex;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
          margin: 0 10px 0 0;
        }
        span {
          display: inline-block;
          color: #ce5b4c;
          font-size: 1rem;
        }
      }
      .log__footer_action {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin: 0 10px 0 0;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  `;
  return (
    <div css={style}>
      <p className="log__header">Chest Pain</p>

      <div className="log__body">
        <img src={"/assets/watch.png"} alt="watch" />
        <span css={css({ display: "flex", flexDirection: "column" })}>
          <span css={css({ display: "inline-block", marginTop: "5px" })}>
            FRI Oct 12 4:27 PM
          </span>
          <span css={css({ fontSize: "0.6rem" })}>
            kbecker@gmail.com completed - THU Oct 11 3:29 PM
          </span>
        </span>
      </div>

      <div className="log__footer">
        <div className="log__footer_main">
          <img src={"/assets/crying_emoji.png"} alt="watch" />
          <span>Severe</span>
        </div>
        <div className="log__footer_action">
          <img src={"/assets/history.png"} alt="history" />
          <span>View History</span>
        </div>
      </div>
    </div>
  );
};

export default LogMessageBody;
