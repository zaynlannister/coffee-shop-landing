import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContact className="bg-[#f7f7f7] py-6">
      <div className="my-container contact flex justify-between">
        <div className="w-[50%] contact__text">
          <img src="/img/logo.svg" alt="logo" />
          <p className="text-[20px] text-[#64646A] mt-6">
            We made it our mission to create community everyday and grow
            meaningful, lasting relationships with our staff, our suppliers and
            of course you, our customers.
          </p>
        </div>
        <div className="contact__images">
          <p className="text-[40px] font-bold mb-4 contact__images-title">
            Contact Alowishus!
          </p>
          <div className="ml-[-12px]">
            <div className="flex">
              <img src="/img/email.svg" alt="email" />
              <p className="mt-2">zaynlannister@gmail.com</p>
            </div>
            <div className="flex">
              <img src="/img/phone.svg" alt="email" />
              <p className="mt-2">+998332488838</p>
            </div>
            <div className="flex">
              <img
                className="cursor-pointer"
                src="/img/facebook.svg"
                alt="img"
              />
              <img className="cursor-pointer" src="/img/inst.svg" alt="img" />
              <img
                className="cursor-pointer"
                src="/img/twitter.svg"
                alt="img"
              />
              <img
                className="cursor-pointer"
                src="/img/linkedin.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.div`
  .contact__images img {
    width: 70px;
    height: 55px;
    object-fit: cover;
  }

  @media (max-width: 855px) {
    .contact {
      flex-direction: column;
      gap: 40px;

      &__text {
        width: 100%;
      }

      &__images-title {
        font-size: 25px;
      }
    }
  }
`;

export default ContactSection;
