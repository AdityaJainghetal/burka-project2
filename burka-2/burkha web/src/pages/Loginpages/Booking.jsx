// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const Bookings = () => {
//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3>Your Bookings</h3>
//         <Button variant="success">New Booking</Button>
//       </div>
//       <Card className="border-0 shadow-sm">
//         <Card.Body>
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Booking ID</th>
//                   <th>Date</th>
//                   <th>Service</th>
//                   <th>Status</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>#12345</td>
//                   <td>May 15, 2023</td>
//                   <td>AC Service</td>
//                   <td><span className="badge bg-success">Confirmed</span></td>
//                   <td><Button variant="outline-success" size="sm">View</Button></td>
//                 </tr>
//                 <tr>
//                   <td>#12346</td>
//                   <td>May 20, 2023</td>
//                   <td>Plumbing</td>
//                   <td><span className="badge bg-warning text-dark">Pending</span></td>
//                   <td><Button variant="outline-success" size="sm">View</Button></td>
//                 </tr>
//                 <tr>
//                   <td>#12347</td>
//                   <td>May 25, 2023</td>
//                   <td>Electrical</td>
//                   <td><span className="badge bg-danger">Cancelled</span></td>
//                   <td><Button variant="outline-success" size="sm">View</Button></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Bookings;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";
import { Container, Card, Button, Table } from "react-bootstrap";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch userId from localStorage
  const userDataStr = localStorage.getItem("user");
  const userId = userDataStr ? JSON.parse(userDataStr).user?._id : null;

  // Fetch payment history
  useEffect(() => {
    const fetchPayments = async () => {
      if (!userId) {
        message.error("Please log in to view your payment history.");
        navigate("/login");
        return;
      }

      try {
        setIsLoading(true);
        const response = await axios.get(`https://backend-20ar.onrender.com/paymentuser/payments/${userId}`);
        setPayments(response.data.data);
      } catch (error) {
        console.error("Error fetching payments:", error);
        message.error("Failed to load payment history.");
        setPayments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, [userId, navigate]);

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Container className="py-16 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">

            
                <div>
  <h3 class="account-details-heading">Your Payment History</h3>
</div>
        <h3 className="text-3xl font-bold text-gray-800 tracking-tight"></h3>
        <Button
          variant="success"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={() => navigate("/cart")}
        >
          New Order
        </Button>
      </div>
      <Card className="shadow-xl rounded-xl bg-white border-0">
        <Card.Body>
          <div className="table-responsive ">
            <Table id='tabling' className="table align-middle border">
              <thead className="bg-gray-100 border">
                <tr className="border">
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Product Name</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Date</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Amount</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Payment Mode</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-sm fw-bold text-gray-700">Remark</th>
                  {/* <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : payments.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No payments found.
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => (
                    <tr key={payment.orderId}>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.productname}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.orderId}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{formatDate(payment.receivingDate)}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">₹{payment.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.paymentMode}</td>
                      <td className={`px-6 py-4 text-sm ${payment?.status == "Completed" ? "text-green-600" : "text-red-600"}`}>
                        
                          {payment?.status}
                       
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{payment.remark || "-"}</td>
                      {/* <td className="px-6 py-4">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="border-green-600 text-green-600 hover:bg-green-50 rounded-lg"
                          onClick={() => navigate(`/payment/${payment.orderId}`)}
                        >
                          View
                        </Button>
                      </td> */}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentHistory;