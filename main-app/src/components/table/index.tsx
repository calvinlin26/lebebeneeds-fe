import * as React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./based";

// Adjust the import path as necessary

// Define the types for the columns and data props including style props
interface Column {
  header: string;
  accessor: string;
  headerClassName?: string; // Custom class for header cells
}

interface DataRow {
  [key: string]: React.ReactNode;
}

interface CustomTableProps {
  columns: Column[];
  data: DataRow[];
  caption?: string;
  footer?: DataRow;
  className?: string; // Custom class for the entire table
  headerClassName?: string; // Custom class for the header row
  bodyClassName?: string; // Custom class for the body section
  footerClassName?: string; // Custom class for the footer row
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  caption,
  footer,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
}) => {
  return (
    <Table className={className}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader className={headerClassName}>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index} className={column.headerClassName}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className={bodyClassName}>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>{row[column.accessor]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {footer && (
        <TableFooter className={footerClassName}>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{footer[column.accessor]}</TableCell>
            ))}
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

export default CustomTable;
