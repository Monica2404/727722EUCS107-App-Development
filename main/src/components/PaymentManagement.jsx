

import React from 'react';
import '../assets/css/paymentmanagement.css'

const PaymentManagement = () => {
  return (
    <div className="payment-management">
      <h2>Payment & Subscription Management</h2>
      <div className="card">
        <h3>Payment History</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>$50.00</td>
              <td>2023-08-05</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$75.00</td>
              <td>2023-08-06</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Manage Subscriptions</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Plan</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Monthly</td>
              <td>2023-08-01</td>
              <td>2023-09-01</td>
              <td>
                <button>Cancel</button>
                <button>Upgrade</button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Annual</td>
              <td>2023-01-01</td>
              <td>2024-01-01</td>
              <td>
                <button>Cancel</button>
                <button>Downgrade</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3>Promotions & Discounts</h3>
        <input type="text" placeholder="Promotion Code" />
        <input type="number" placeholder="Discount Percentage" />
        <input type="date" placeholder="Valid Until" />
        <button>Create Promotion</button>
        <ul>
          <li>
            SUMMER2023 - 20% off (Valid until 2023-08-31)
            <button>Delete</button>
          </li>
          <li>
            NEWUSER - 15% off (Valid until 2023-12-31)
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentManagement;