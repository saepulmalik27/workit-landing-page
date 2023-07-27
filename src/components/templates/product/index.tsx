import React from "react";

type TProductProps = {
  products : {
    title : string,
    description : string
  }[]
};

const Product : React.FC<TProductProps> = ({products}) => {
  return (
    <section className="relative -mt-8 h-fit min-h-[482px] md:min-h-[541px] lg:h-[730px] bg-ghost-white -z-10 flex justify-center items-center pt-64 pb-20 px-4 custome-path">
      <div className="flex flex-col lg:flex-row gap-[26px] justify-center items-center lg:max-w-[1114px] md:max-w-[573px] m-auto">
        {products.map((item, index) => (
          <div
            className="flex lg:flex-col md:flex-row flex-col lg:gap-14 md:gap-8 gap-6 justify-center items-center"
            key={index}
          >
            <div className="rounded-full flex justify-center items-center lg:w-14 lg:h-14 w-12 h-12  border aspect-square border-davy-grey">
              <span className="heading-xs text-dark-purple">{index + 1}</span>
            </div>
            <div className="flex flex-col lg:gap-7 gap-4">
              <h3 className="heading-xs  lg:heading-sm md:heading-ss">{item.title}</h3>
              <p className="lg:text-main text-base leading-7 ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
