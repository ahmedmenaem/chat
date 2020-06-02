/** @jsx jsx */
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

const SideNav = () => {
  const links = [
    {
      name: "conversations",
      iconPath: "/assets/conversation.png",
      active: true,
    },
    {
      name: "profile",
      iconPath: "/assets/profile.png",
      active: false,
    },
    {
      name: "settings",
      iconPath: "/assets/settings.png",
      active: false,
    },
  ];

  const style = css`
    display: flex;
    flex-direction: column;
    width: 80px;
    background-color: #48b0b8;
    height: 100vh;
    position: relative;

    header {
      text-align: center;
      padding: 10px;
      height: 60px;
    }

    section {
      margin-top: 0;

      nav {
        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            display: block;
            text-align: center;
            padding: 15px 0;
            &:hover {
              background-color: #79c4ca;
            }
          }
        }
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      width: 100%;
      padding: 15px 0;
    }
  `;

  return (
    <aside css={style}>
      <header>
        <img src={"/assets/logo.png"} alt="logo" />
      </header>
      <section>
        <nav>
          <ul>
            {links.map((link) => (
              <li
                key={link.name}
                css={css`
                  ${link.active ? "background-color: #79c4ca;" : ""};
                `}
              >
                <Link to={""}>
                  <img src={link.iconPath} alt="chat" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <footer>
        <Link to={""}>
          <img src={"/assets/logout.png"} alt="chat" />
        </Link>
      </footer>
    </aside>
  );
};

export default SideNav;
