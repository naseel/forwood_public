
import QuoteForm from "@/components/forms/QuoteForm";

const Quote = () => {
  return (
    <div>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Select your products and enter required quantities.
          </p>
          
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default Quote;
