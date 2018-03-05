import React, {Component} from 'react';
import GraceHopper from './images/grace-hopper.jpg';
import eeuu from './images/ee-uu.png';
import './css/aside.css';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
		    <table className="summary-table">
			    <thead className="info-table">
				    <tr>
					    <th colspan={3}>Grace Murray Hopper</th>
				    </tr>
			    </thead>

			    <tbody>
            <tr>
              <td colspan={3}>
                <img src={GraceHopper} className="img-responsive image text-center" alt="Grace Murray Hopper"/>
                <p>Rear admiral Grace M. Hopper, 1984</p>
              </td>
            </tr>
            <tr >
              <th colspan={3} className="text-center info-table">Personal Information</th>
            </tr>
            <tr>
              <th className="text-left">Nickname(s)</th>
              <td colspan={2} className="text-justify">"Amazing Grace"</td>
            </tr>
            <tr>
              <th className="text-left">Born</th>
              <td colspan="{2}" className="text-justify">December 9, 1906 New York City, New York, U.S.</td>
            </tr>
            <tr>
              <th className="text-left">Died</th>
              <td colspan="{2}" className="text-justify">January 1, 1992 (aged 85)</td>
            </tr>
          <tr>
            <th className="text-left">Allegiance</th>
            <td className="text-justify"><img src={eeuu} alt="EEUU"/> United States of America</td>
          </tr>
			    </tbody>
		    </table>
	    </aside>
    );
  }
}

export default Aside;