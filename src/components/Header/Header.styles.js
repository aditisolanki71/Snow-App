// import { rem, color } from "config/variable.styles";
import rem from "../../config/variable.style"
import styled from "styled-components";

export const HeaderStyles = styled.div`
width:100%;
.header_container {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  justify-content: space-between;
  width: 100%;
  margin: 0px 8px;
  height: 72px;
  flex-shrink: 0;
  padding: 22px 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.header_left {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.header_right {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

img {
  padding: 4px;
}
`;

