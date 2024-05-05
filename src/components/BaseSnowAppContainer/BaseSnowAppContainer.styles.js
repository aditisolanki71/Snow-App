import styled from 'styled-components';

export const BaseSnowAppContainerStyles = styled.div`
  .container_left {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .snow_logo {
    display: flex;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 28px 40px 28px 24px;
  }
  .container_content {
    overflow: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .container_footer_content {
    color: rgba(0, 0, 0, 0.4);
    padding: 27px 28px 19px;
    display: flex;
    justify-content: space-between;
  }
  .footer_right {
    display: flex;
    gap: 20px;
  }
`;
