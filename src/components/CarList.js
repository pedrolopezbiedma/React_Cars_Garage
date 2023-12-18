import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carsSlice.cars);
  console.log("cars is -->", cars);

  const handleDeleteCar = (carId) => {
    dispatch(removeCar(carId));
  };

  return (
    <div className="car-list">
      {cars.map((car) => {
        return (
          <div className="panel" key={car.id}>
            <p>
              {car.name} - €{car.cost}
            </p>
            <button
              className="button is-danger"
              onClick={() => handleDeleteCar(car.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default CarList;
