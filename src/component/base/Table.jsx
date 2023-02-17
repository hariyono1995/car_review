export default function Table() {
  return (
    <>
      <section>
        <h2>FontAwesome</h2>

        <table class="table">
          <thead>
            <tr>
              <th>Clasificación</th>
              <th>Nombre de Equipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Deportivo Alavés</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="fa fa-eye"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="fa fa-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Aurrerá de Vitoria</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="fa fa-eye"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="fa fa-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Saski Baskonia</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="fa fa-eye"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="fa fa-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Glyphicons version</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Clasificación</th>
              <th>Nombre de Equipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Deportivo Alavés</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="glyphicon glyphicon-eye-open"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="glyphicon glyphicon-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Aurrerá de Vitoria</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="glyphicon glyphicon-eye-open"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="glyphicon glyphicon-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Saski Baskonia</td>
              <td>
                <button
                  class="btn btn-primary"
                  title="View"
                >
                  <i class="fglyphicon glyphicon-eye-open"></i>
                  <span class="hidden-xs"> Ver</span>
                </button>
                <button
                  class="btn btn-danger"
                  title="Delete"
                >
                  <i class="glyphicon glyphicon-trash"></i>
                  <span class="hidden-xs"> Borrar</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
