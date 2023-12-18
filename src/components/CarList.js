import { useSelector } from "react-redux"

const CarList = () => {
    const cars = useSelector((state) => state.carsSlice.cars )
    console.log('cars is -->', cars);
    return(
        <h1>This is the CarList</h1>
    )
}

export default CarList