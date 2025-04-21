import { Layout } from "./components/common/Layout";
import { ListaTareasAsignadas } from "./components/ListaTareasAsignadas";

export const Tareas = () => {
  return (
    <>
      <Layout>
        <div className="mt-5">
          <ListaTareasAsignadas />
        </div>
      </Layout>
    </>
  );
};
