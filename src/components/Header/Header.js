/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Header = ({ title, backgroundColor = "#5cafb5", actions = [] }) => {
  const style = css`
    height: 30px;
    padding: 15px;
    background-color: ${backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
  `;
  return (
    <header css={style}>
      <div css={css({ color: "#fff" })}>
        <p>{title}</p>
      </div>
      <div>{actions.map((action) => action)}</div>
    </header>
  );
};

export default Header;
