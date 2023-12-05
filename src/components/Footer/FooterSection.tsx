import styled from "styled-components";

const FooterSection = () => {
  return (
    <StyledFooter>
      <div className="my-container">
        <p>
          Copytright © 2023{" "}
          <span className="font-[600]">Alowishus Delicious</span>
        </p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  border-top: 1px solid silver;
  padding: 40px 0;
  background-color: #f7f7f7;
`;

export default FooterSection;
