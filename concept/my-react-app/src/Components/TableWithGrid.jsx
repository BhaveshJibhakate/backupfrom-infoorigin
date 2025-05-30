import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TableWithGrid = ({ data }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="grid-item">{item.id}</td>
              <TableCell text={item.name} tooltipId={`tooltip-name-${item.id}`} />
              <TableCell text={item.description} tooltipId={`tooltip-desc-${item.id}`} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Reusable TableCell Component with Conditional Tooltip
const TableCell = ({ text, tooltipId }) => {
  const cellRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (cellRef.current) {
        setIsOverflowed(cellRef.current.scrollWidth > cellRef.current.clientWidth);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <td className="grid-item" ref={cellRef} {...(isOverflowed ? { "data-tooltip-id": tooltipId, "data-tooltip-content": text } : {})}>
      {text}
      {isOverflowed && <Tooltip id={tooltipId} place="top" />}
    </td>
  );
};

export default TableWithGrid;
