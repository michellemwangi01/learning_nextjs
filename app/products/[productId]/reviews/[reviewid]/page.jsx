import { notFound } from "next/navigation";
const page = ({ params }) => {
  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }

  return (
    <div>
      This is a specific review for a specific product
      <p>
        Review {params.reviewid} for product {params.productId}
      </p>
    </div>
  );
};

export default page;
