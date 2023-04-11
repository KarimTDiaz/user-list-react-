import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	margin: 0;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
	font-family: sans-serif;
background-image: url('/public/dddepth-078.jpg');
background-repeat: no-repeat;
background-attachment: fixed;
	background-size: cover;
}
`;

export { GlobalStyle };
