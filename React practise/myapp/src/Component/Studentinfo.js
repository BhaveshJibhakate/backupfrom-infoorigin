import React, { useState } from 'react';
import './StudentTable.css'; // Import the CSS file

export const studentData = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', city: 'New York' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', city: 'Los Angeles' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', city: 'Chicago' },
    { id: 4, firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', city: 'Houston' },
    { id: 5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', city: 'Phoenix' },
];

const StudentTable = () => {
    const [filteredData, setFilteredData] = useState(studentData);
    const [filters, setFilters] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        city: '',
    });
    const [isFilterActive, setIsFilterActive] = useState(false);

    // Function to get unique values from filtered data
    const getUniqueValues = (key) => {
        return [...new Set(filteredData.map(student => student[key]))];
    };

    const handleFilterChange = (column, value) => {
        setFilters((prevFilters) => {
            const newFilters = { ...prevFilters, [column]: value };
            setFilteredData(applyFilters(newFilters));
            return newFilters;
        });
    };

    const applyFilters = (filters) => {
        return studentData.filter((student) => {
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return student[key].toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    };

    const handleFilterIconClick = () => {
        setIsFilterActive((prevState) => {
            if (prevState) {
                // Reset filters and show all data when turning off the filter
                setFilters({
                    id: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    city: '',
                });
                setFilteredData(studentData);
            }
            return !prevState;
        });
    };

    return (
        <div>
            <h2>Student Information</h2>
            <button onClick={handleFilterIconClick} className="filter-btn">🔍 Toggle Filter</button>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                    {isFilterActive && (
                        <tr className="filter-row">
                            <th>
                                <input
                                    type="text"
                                    placeholder="Filter ID"
                                    value={filters.id}
                                    onChange={(e) => handleFilterChange('id', e.target.value)}
                                />
                            </th>
                            <th>
                                <select
                                    value={filters.firstName}
                                    onChange={(e) => handleFilterChange('firstName', e.target.value)}
                                >
                                    <option value="">All</option>
                                    {getUniqueValues('firstName').map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </th>
                            <th>
                                <input
                                    type="text"
                                    placeholder="Filter Last Name"
                                    value={filters.lastName}
                                    onChange={(e) => handleFilterChange('lastName', e.target.value)}
                                />
                            </th>
                            <th>
                                <input
                                    type="text"
                                    placeholder="Filter Email"
                                    value={filters.email}
                                    onChange={(e) => handleFilterChange('email', e.target.value)}
                                />
                            </th>
                            <th>
                                <select
                                    value={filters.city}
                                    onChange={(e) => handleFilterChange('city', e.target.value)}
                                >
                                    <option value="">All</option>
                                    {getUniqueValues('city').map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {filteredData.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
