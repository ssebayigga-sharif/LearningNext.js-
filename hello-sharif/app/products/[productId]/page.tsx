import React from "react";

const productDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>; //dynamic routing
}) => {
  const productId = (await params).productId;
  return (
    <div>
      <h1>product detailed {productId}</h1>
    </div>
  );
};

export default productDetails;
