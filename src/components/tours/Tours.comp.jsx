import Tour from "../tour/Tour.comp";
const Tours = (props) => {
  const { tours, removeTour } = props;

  return (
    <div className="tours-container">
      {tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
