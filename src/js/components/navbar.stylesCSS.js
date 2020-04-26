import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const header = css`
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-align: left;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-start;
  top: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  text-transform: uppercase !important;
  background-color: green !important;
  font-weight: 700;
  font-family: Montserrat;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  transition: padding-top 0.3s, padding-bottom 0.3s;
`;

export const nav = css`
  -webkit-tap-highlight-color: transparent;

  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  text-transform: uppercase !important;
  font-weight: 700;
  font-family: Montserrat;
  box-sizing: border-box;
  flex-grow: 1;
  align-items: center;
  display: flex !important;
  flex-basis: auto;
`;

export const ul = () => css`
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  text-transform: uppercase !important;
  font-weight: 700;
  font-family: Montserrat;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto !important;
  flex-direction: row;
  letter-spacing: 0.0625rem;
  margin-top: 0;
`;

export const listItem = () => css`
  -webkit-tap-highlight-color: transparent;

  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-transform: uppercase !important;
  font-weight: 700;
  font-family: Montserrat;
  list-style: none;
  letter-spacing: 0.0625rem;
  box-sizing: border-box;
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
`;

// const Navbar = () => (
//   <header css={header}>
//     <img src="" />
//     <nav css={nav}>
//       <ul css={ul}>
//         <li css={listItem}>
//           <Link className="link" to="/">
//             Home
//           </Link>
//         </li>
//         <li css={listItem}>
//           <a href="#">User</a>
//         </li>
//         <li css={listItem}>
//           {/* <a href="#">Contact</a> */
//           <Link className="link" to="dashboard">
//             Dashboard
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   </header>
// );
