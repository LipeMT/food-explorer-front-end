import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > header {
    height: 114px;
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    overflow-y: auto;
  }

  > footer {
    height: 77px;
    flex-shrink: 0;
  }
`