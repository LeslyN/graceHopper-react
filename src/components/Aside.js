import React, {Component} from 'react';
import GraceHopper from './images/grace-hopper.jpg';
import eeuu from './images/ee-uu.png';
import './css/aside.css';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
		    <table className="summary-table">
			    <thead>
				    <tr>
					    <th colspan={2}>Grace Murray Hopper</th>
				    </tr>
			    </thead>

			    <tbody>
            <tr>
              <td colspan={2}>
                <img src={GraceHopper} alt="Grace Murray Hopper"/>
                <p>Rear admiral Grace M. Hopper, 1984</p>
                <hr/>
              </td>
            </tr>
            <tr >
              <th colspan={2}>Informaci&oacute;n Personal</th>
            </tr>
            <tr>
              <th>Nickname(s)</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1906 New York City, New York, U.S. </td>
            </tr>
            <tr>
              <th>Died</th>
              <td>January 1, 1992 (aged 85)</td>
            </tr>
          <tr>
            <th>Allegiance</th>
            <td><img src={eeuu} alt="EEUU"/> United States of America</td>
          </tr>
			    </tbody>
		    </table>
	    </aside>
    );
  }
}

export default Aside;