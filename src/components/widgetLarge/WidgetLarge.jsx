import "./widgetLarge.css"

export default function WidgetLarge() {

  const Button = ({type}) => {
    return <button className= {"widgetLargeBtn "+type}> {type} </button>
  }

  return (
        <div className="widgetLarge">
          <h3 className="widgetLargeTtl">Latest Transactions</h3>
          <table className="widgetLargeTbl">
            <tr className="widgetLargeTr">
              <th className="widgetLargeTh">
                Customer
              </th>
              <th className="widgetLargeTh">
                Date
              </th>
              <th className="widgetLargeTh">
                Amount
              </th>
              <th className="widgetLargeTh">
                Status
              </th>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-dick-697509.jpg&fm=jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Veniam amet duis</span>
              </td>
              <td className="widgetLargeDate">22 Juni 2021</td>
              <td className="widgetLargeAmount">Rp. 153,000</td>
              <td className="widgetLargeStatus"><Button type="Approved" /></td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-dick-697509.jpg&fm=jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Veniam amet duis</span>
              </td>
              <td className="widgetLargeDate">22 Juni 2021</td>
              <td className="widgetLargeAmount">Rp. 153,000</td>
              <td className="widgetLargeStatus"><Button type="Decline" /></td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-dick-697509.jpg&fm=jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Veniam amet duis</span>
              </td>
              <td className="widgetLargeDate">22 Juni 2021</td>
              <td className="widgetLargeAmount">Rp. 153,000</td>
              <td className="widgetLargeStatus"><Button type="Pending" /></td>
            </tr>
            <tr className="widgetLargeTr">
              <td className="widgetLargeUser">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-dick-697509.jpg&fm=jpg" alt="" className="widgetLargeImg" />
                <span className="widgetLargeName">Veniam amet duis</span>
              </td>
              <td className="widgetLargeDate">22 Juni 2021</td>
              <td className="widgetLargeAmount">Rp. 153,000</td>
              <td className="widgetLargeStatus"><Button type="Approved" /></td>
            </tr>
          </table>
        </div>
    )
}
