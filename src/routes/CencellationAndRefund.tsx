const CencellationAndRefund: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg  my-32">
      <h1 className="text-3xl font-bold mb-6">Return and Refund Policy</h1>

      <p className="text-lg text-gray-600 mb-8">
        At <strong>availablehour.com</strong>, we believe in helping our
        customers as far as possible. Below is our liberal cancellation and
        refund policy to ensure that your experience with us is smooth and
        hassle-free.
      </p>

      <div>
        <section className="py-4!">
          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
          <p className="text-gray-700 mb-4">
            Cancellations will be considered only if the request is made within
            3-5 days of placing the order. However, cancellation requests may
            not be entertained if the orders have been communicated to the
            vendors/merchants, and they have initiated the shipping process.
          </p>
          <p className="text-gray-700">
            We do not accept cancellation requests for perishable items such as
            flowers, eatables, etc. However, a refund or replacement can be made
            if the customer establishes that the quality of the product
            delivered is not up to standards.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-2xl font-semibold mb-4">
            Damaged or Defective Items
          </h2>
          <p className="text-gray-700 mb-4">
            In case of receipt of damaged or defective items, please report the
            issue to our Customer Service team within 3-5 days of receipt. The
            request will be entertained once the merchant has inspected and
            determined the issue on their end.
          </p>
          <p className="text-gray-700">
            If you feel that the product received is not as shown on the site or
            does not meet your expectations, please inform our Customer Service
            within 3-5 days of receiving the product. Our team will look into
            your complaint and take appropriate action.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-2xl font-semibold mb-4">
            Warranty and Manufacturer Issues
          </h2>
          <p className="text-gray-700 mb-4">
            For products that come with a warranty from manufacturers, please
            refer the issue directly to the manufacturer.
          </p>
        </section>

        <section className="py-4!">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <p className="text-gray-700">
            In case any refund is approved by <strong>availablehour.com</strong>
            , please note that the refund process will take 6-8 days to be
            completed. The refunded amount will be processed back to the
            original payment method used for the purchase.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CencellationAndRefund;
