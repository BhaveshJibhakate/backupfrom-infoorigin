import React, { useState } from "react";
import { studentData } from "./Studentinfo";
const Demotable=()=>{

  const [filteredStudents,setfilteredStudents]=useState(studentData)
  const [isFilterActive,setIsFilterActive]=useState(false)
  const [filters,setfilters]=useState({
    id:"",
    firstName:"",
    lastName:"",
    email:"",
    city:""
  })
    return (
        <div>
            <button onClick={toggleFilter}>
                {isFilterActive ? "Disable Filter" : "Enable Filter"}
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>city</th>
                    </tr>
                    {isFilterActive && (<tr>
                        <th><input type="text" placeholder="enter id" name="id" value={filters.id} onChange={handlefilterchange}/></th>
                        <th>
                            <select name="firstName" value={filters.firstName} onChange={handlefilterchange}>
                                <option value="">All</option>
                                {uniqueFirstNames.map((name, index) => (<option key={index} value={name}>{name}</option>))}
                            </select>
                        </th>
                        <th><input type="text" placeholder="enter lastname" name="lastName" value={filters.lastName} onChange={handlefilterchange}/></th>
                        <th><input type="text" placeholder="enter email" name="email" value={filters.email} onChange={handlefilterchange}/></th>
                        <th>
                            <select name="city" value={filters.city} onChange={handlefilterchange}>
                                <option value="">All</option>
                                {uniqueCities.map((city,index)=>(<option key={index} value={city}>{city}</option>))}
                            </select>
                        </th>
                    </tr>)}
                </thead>
                <tbody>
                    {filteredStudents.map((student) => (<tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.city}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>)
}

export default Demotable