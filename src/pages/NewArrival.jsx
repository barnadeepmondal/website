import Cards from "../components/Cards";
import useDataContext from "../customHooks/useDataContext";

const NewArrivals = () => {
  const { loading, error, product } = useDataContext();

  if (loading) {
    return (
      <p className="text-center text-2xl mt-10">
        Loading new arrivals...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-2xl mt-10 text-red-600">
        {error}
      </p>
    );
  }

  // Show the first 8 products
  const newArrivals = product.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          New Arrivals
        </h1>

        <p className="text-gray-500 mt-3">
          Discover the latest additions to our collection.
        </p>

        <div className="w-20 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newArrivals.map((item) => (
          <Cards key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;