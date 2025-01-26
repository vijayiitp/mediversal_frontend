import React from "react";

export default function UserTable({ patient }) {
  const patientArray = patient;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Patient Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Contact No.
            </th>
            <th scope="col" className="px-6 py-3">
              Disease
            </th>
            <th scope="col" className="px-6 py-3">
              Doctor
            </th>
          </tr>
        </thead>
        <tbody>
          {patientArray.length > 0 ? (
            patientArray.map((patient, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {patient.name || "N/A"}
                </th>
                <td className="px-6 py-4">{patient.email || "N/A"}</td>
                <td className="px-6 py-4">{patient.contact|| "N/A"}</td>
                <td className="px-6 py-4">{patient.disease || "N/A"}</td>
                <td className="px-6 py-4">{patient.doctor || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 text-center">
                No patients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}
