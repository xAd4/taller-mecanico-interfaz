import { Spinner } from "react-bootstrap";

export const SpinnerComponent = ({ colSpan = 6 }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center">
        <div className="d-flex justify-content-center align-items-center mt-5 mb-2">
          <Spinner animation="border" />
        </div>
        <p>Cargando, por favor espere...</p>
      </td>
    </tr>
  );
};
