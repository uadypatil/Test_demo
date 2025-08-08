import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import * as XLSX from 'xlsx';

function EventManagerRevenueReport() {
    const [showFilters, setShowFilters] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [name, setName] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const tableRef = useRef(null);

    const dummyData = [
        { id: '101', name: 'Anishq Shubhashish', amount: '1001/-', datetime: '2025-08-10T10:11:00' },
        { id: '102', name: 'Riya Kulkarni', amount: '750/-', datetime: '2025-08-11T11:25:00' },
        { id: '103', name: 'Ramesh Jadhav', amount: '550/-', datetime: '2025-08-12T12:14:00' },
        { id: '104', name: 'Anishq Shubhashish', amount: '2000/-', datetime: '2025-08-13T09:30:00' }
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        setFilteredData(dummyData); // Load all by default
    }, []);

    const toggleFilters = () => setShowFilters(prev => !prev);

    const handlePrint = () => {
        const printContents = tableRef.current.innerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload(); // restore page after print
    };

    const handleExportToExcel = () => {
        const table = tableRef.current.querySelector('table');
        const wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, 'RevenueReport.xlsx');
    };

    const handleFilter = () => {
        const filtered = dummyData.filter(item => {
            const itemDate = new Date(item.datetime).toISOString().split('T')[0];
            const fromMatch = fromDate ? itemDate >= fromDate : true;
            const toMatch = toDate ? itemDate <= toDate : true;
            const nameMatch = name ? item.name.toLowerCase().includes(name.toLowerCase()) : true;
            return fromMatch && toMatch && nameMatch;
        });

        setFilteredData(filtered);
    };

    return (
        <div className="wrap-content h-100 w-100 border-3 border-secondary shadow rounded-5 py-3 m-1">
            {/* Header */}
            <div className="row d-flex justify-content-center w-100 mx-0">
                <div className="col-lg-6 col-md-6 col-sm-12 border-1 border-dark">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="mb-2">Revenue Report</h2>
                        <button className="btn btn-sm btn-primary" onClick={toggleFilters}>
                            {showFilters ? 'Close Filter' : 'Filter'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            {showFilters && (
                <div className="row d-flex justify-content-center w-100 mx-0 mt-3" data-aos="fade-down">
                    <div className="col-lg-6 col-md-6 col-sm-12 border-1 border-dark">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="d-flex justify-content-between gap-2">
                                    <div className="w-50">
                                        <label className="form-label">From Date</label>
                                        <input type="date" className="form-control" value={fromDate} onChange={e => setFromDate(e.target.value)} />
                                    </div>
                                    <div className="w-50">
                                        <label className="form-label">To Date</label>
                                        <input type="date" className="form-control" value={toDate} onChange={e => setToDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
                                </div>
                                <div className="my-2">
                                    <button className="btn btn-sm btn-primary" onClick={handleFilter}>Apply Filter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Table Section */}
            <div className="row d-flex justify-content-center w-100 mx-0 mt-3">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body ps-0 pb-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>Recently Added</h4>
                                <div className="dropdown">
                                    <button className="btn btn-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                                        Action
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><button className="btn btn-light w-100 mb-2" onClick={handlePrint}>Print</button></li>
                                        <li><button className="btn btn-light w-100" onClick={handleExportToExcel}>Excel</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card-body p-0">
                            <div className="table-responsive" style={{ height: '65dvh', overflowY: 'scroll' }} ref={tableRef}>
                                <table className="table table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Reg. No</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Date Time</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length > 0 ? (
                                            filteredData.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{new Date(item.datetime).toLocaleString()}</td>
                                                    <td>
                                                        <a href="/em/doner/profile" className="btn border-primary text-primary btn-sm">
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center text-muted">No records found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventManagerRevenueReport;
