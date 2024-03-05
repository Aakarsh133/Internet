import React, { useState } from "react";
import { Link } from "react-router-dom";

const Complaints = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [sortConfig, setSortConfig] = useState(null);

    const data = [
        {
            floorNumber: 1,
            roomNumber: 101,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 2,
            roomNumber: 202,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 6,
            roomNumber: 603,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 104,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 105,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 106,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 107,
            name: "John Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "Jane Doe",
        },
        {
            floorNumber: 1,
            roomNumber: 108,
            name: "Jane Doe",
            complaintType: "Internet",
            complaintDescription: "Internet not working",
            date: "2021-10-01",
            status: "Pending",
            personelAssigned: "John Doe",
        },
    ];

    return (
        <>
            <navbar className="flex flex-wrap items-center justify-between p-5 bg-black">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">CRISPR</span>
                </div>
                <div className="flex items-center">
                    <Link to="/employees" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Employees
                    </Link>
                    <Link to="/complaints" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Complaints
                    </Link>
                    <Link to="/" className="text-indigo-100 hover:text-white font-bold mr-4">
                        Logout
                    </Link>
                </div>
            </navbar>
            <h1 className="text-center text-3xl text-black font-bold mt-10">Complaints</h1>
            <div className="flex min-h-screen min-w-screen items-center justify-center text-gray-600 bg-gray-50">                       
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full">
                            <thead>
                                <tr>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Floor Number
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Room Number
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Name
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Complaint Type
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Complaint Description
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Date
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Status
                                    </th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Personel Assigned
                                    </th>
                                    <th className="font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                        Mark as Resolved
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.floorNumber}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.roomNumber}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.name}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.complaintType}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.complaintDescription}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.date}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.status}
                                        </td>
                                        <td className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 ">
                                            {item.personelAssigned}
                                        </td>
                                        <td className="p-3 bg-gray-200 text-gray-600 border border-gray-300 ">
                                            <button className="bg-green-500 hover:bg-green-700 text-white px-2 rounded-full">
                                               Resolved
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
  
        </>
    );
};

export default Complaints;