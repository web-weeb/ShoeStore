import {Essential_collection,MVP_collection, MYNTG, NIKE_TECH,} from "../components";

const ProductOffers = () => {
  return (
    <>
    <section className="max-w-[1440px] py-6 px-8 mx-auto" id="offers">
      <Essential_collection/>
      <MVP_collection/>
      <MYNTG/>
      <NIKE_TECH/>
    </section>
    </>
  );
};

export default ProductOffers;
