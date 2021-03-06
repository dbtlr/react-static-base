
import { injectGlobal } from 'styled-components';

import 'typeface-open-sans';

injectGlobal`

:root {
  --background-color: #FFFFFA;
  --text-color: #6A7987;
  --light-color: #CFCFCF;
  --menu-background-color: #6A7987CC;
  --primary-color: #058ED9;
  --light-primary-color: #5BC0EB;
  --secondary-color: #FB5607;
  --light-secondary-color: #FAA300;
  --error-color: #E63946;
  --success-color: #5FAD56;
}

html {
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--dark-color);
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 300;
  
  &.strong {
    font-weight: 700;
  }
  
  a, a:hover {
    text-decoration: none;
  }
}

strong {
  font-weight: 700;
}

a {
  color: var(--primary-color);
  
  &:hover {
    color: var(--secondary-color);
  }
}

/* Main layout styles */
#root {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 4rem 1fr 3.5rem;
  
  grid-template-areas:
    "header"
    "body"
    "footer";
  
  & > header {
    grid-area: header;
  }
  
  & > main {
    grid-area: body;
    padding: 3rem 1rem;
  }
  
  & > footer {
    grid-area: footer;
  }
}
`;
