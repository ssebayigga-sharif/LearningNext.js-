import React from "react";

const reviewNumber = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <div>
      <h1>
        products {productId} and reviewers {reviewId}
      </h1>
    </div>
  );
};

export default reviewNumber;
