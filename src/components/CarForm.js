import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store/slices/formSlice";
import { addCar } from "../store/slices/carsSlice";

const CarForm = () => {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => state.formSlice )

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        dispatch(changeCost(parseInt(event.target.value))) 
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }))
    }

    return(
        <div className="car-form panel">
            <h4 className="subtitle is-3">Car Form</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name: </label>
                        <input className="input is-expanded" onChange={handleNameChange} value={name} />
                    </div>
                    <div className="field">
                        <label className="label">Cost: </label>
                        <input className="input is-expanded" type="number" onChange={handleCostChange} value={cost} />
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CarForm;