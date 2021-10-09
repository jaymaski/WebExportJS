import './Dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
    var testLoop = [];
    for (let i = 0; i < 10; i++) {
        testLoop.push(
        <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>Mark</td>
            <td>99</td>
            <td>1</td>
        </tr>
      );
    }

    return(
        <div>
            <div class="table-card">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Open Tickets</th>
                            <th scope="col">Resolved</th>
                        </tr>
                    </thead>

                    <tbody>
                        {testLoop}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
    
export default Dashboard;        