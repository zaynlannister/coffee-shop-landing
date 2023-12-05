import styled from "styled-components";

const featureCards = [
  {
    title: "Our Catering",
    description: "Alowishus Catering, delicious drop off Catering",
    img: "1",
    content: "Order cathering",
  },
  {
    title: "The Food",
    description: "Our entire menu is available as dine in or takeaway.",
    img: "2",
    content: "food menu",
  },
  {
    title: "The Gelato",
    description: "Life is like GELATO, enjoy it before it melts.",
    img: "3",
    content: "Discover more",
  },
];

const FeatureSection = () => {
  return (
    <StyledFeature>
      <div className="my-container">
        <div className="text-center mb-12">
          <p className="text-[40px] font-bold">Explore Our Alowishus</p>
          <p className="text-[#64646A] text-[20px]">
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>
        </div>
        <div className="feature-cards flex justify-between gap-6">
          {featureCards.map((item, index) => (
            <div className="feature-card w-[400px]" key={index}>
              <p className="text-[28px] font-bold">{item.title}</p>
              <p className="text-[20px] text-[#64646A]">{item.description}</p>
              <img
                className="my-8 mx-auto object-contain w-[120px] height-[120px]"
                src={`/img/feature-${item.img}.svg`}
                alt="img"
              />
              <div className="text-center">
                <button className="primary-button">{item.content}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="feature-order flex items-center">
          <div>
            <img
              className="object-contain w-[800px] h-[400px]"
              src="img/feature-order.png"
              alt="img"
            />
          </div>
          <div>
            <p className="text-[35px] font-bold">Order Your Favourite Coffee</p>
            <p className="text-[#64646A] text-[20px] my-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="primary-button">order now</button>
          </div>
        </div>
        <div className="feature-order feature-order-second flex items-center">
          <div>
            <p className="text-[35px] font-bold">Order Your Favourite Coffee</p>
            <p className="text-[#64646A] text-[20px] my-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="primary-button">order now</button>
          </div>
          <div>
            <img
              className="object-contain w-[800px] h-[400px]"
              src="img/feature-order-2.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </StyledFeature>
  );
};

const StyledFeature = styled.div`
  border-radius: 24px;
  background: #f7f7f7;
  padding: 50px 0;

  .feature-card {
    border-radius: 24px;
    background: linear-gradient(152deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0px 30px 60px 0px rgba(163, 168, 178, 0.15);
    padding: 30px 20px;
  }

  @media (max-width: 930px) {
    .feature-cards {
      flex-direction: column;
    }

    .feature-card {
      width: 100%;
    }
  }

  @media (max-width: 820px) {
    .feature-order {
      flex-direction: column;
    }

    .feature-order-second {
      flex-direction: column-reverse;
    }
  }
`;

export default FeatureSection;
