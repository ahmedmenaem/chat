/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TodoMessageBody = ({ todo }) => {
  const style = css`
    .todo__header {
      font-weight: light;
      color: #546566;
      font-size: 0.9rem;
      margin-bottom: 10px;
    }

    .todo__list {
      display: flex;
      color: #546566;
      font-size: 0.7rem;
      align-items: "center";
      img {
        width: 20px;
        height: 20px;
        margin: 0 10px 0 0;
      }

      span.todo__body {
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          &:first-of-type {
            margin-top: 5px;
          }
        }
      }
    }

    .todo__footer {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;

      .done_box {
        display: flex;
        width: 15%;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        justify-content: space-between;

        span {
          color: #e88282;
          font-weight: light;
        }
      }

      .done_by {
        display: flex;
        align-items: center;

        p {
          display: flex;
          flex-direction: column;
          margin: 0;

          span {
            margin: 0;
            font-weight: lighter;
            font-size: 0.7rem;
            color: #666666;

            &.done_date {
              text-align: right;
            }
          }
        }
        img {
          width: 30px;
          height: 30px;
          margin: 0 5px;
        }
      }
    }
  `;
  return (
    <div css={style}>
      <p className="todo__header">{todo.title}</p>

      <div className="todo__list">
        <img className="todo__icon" src={"/assets/watch.png"} alt="watch" />
        <span className="todo__body">
          <span>{todo.time}</span>
          <span>{todo.repeatedTime}</span>
        </span>
      </div>

      <div className="todo__list">
        <img className="todo__icon" src={"/assets/notes.png"} alt="watch" />
        <span className="todo__body">
          <span>{todo.body}</span>
        </span>
      </div>

      <div className="todo__footer">
        {todo.isCompleted ? (
          <div className="done_box">
            <img
              src={"/assets/check.png"}
              alt="check"
              css={css({ width: "20px", height: "20px" })}
            />
            <span>done</span>
          </div>
        ) : null}

        <div className="done_by">
          <p>
            <span>
              {todo.by} {todo.isCompleted ? "completed" : ""}
            </span>
            <span className="done_date">{todo.doneAt}</span>
          </p>
          <img src={todo.userAvatar} alt="user1" />
        </div>
      </div>
    </div>
  );
};

export default TodoMessageBody;
