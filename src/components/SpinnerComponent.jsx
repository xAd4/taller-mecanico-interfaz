import { Spinner } from "react-bootstrap";

export const SpinnerComponent = ({ colSpan = 6 }) => {
  return (
    <div>
      <div colSpan={colSpan} className="text-center">
        <div className="d-flex justify-content-center align-items-center mt-5 mb-2">
          <Spinner animation="border" />
        </div>
        <p>Cargando, por favor espere...</p>
      </div>
    </div>
  );
};
