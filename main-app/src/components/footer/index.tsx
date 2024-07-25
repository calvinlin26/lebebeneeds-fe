import * as React from "react";

interface FooterColumn {
  title?: string;
  items: { content: React.ReactNode }[];
}

interface CustomFooterProps {
  leftColumns?: FooterColumn[];
  rightColumns?: FooterColumn[];
  bottomColumns?: FooterColumn[];
  bottomColumnLayout?: "left-right" | "center";
  styleFooter?: string;
  dividerColor?: string;
  titleStyle?: string;
}

const CustomFooter: React.FC<CustomFooterProps> = ({
  leftColumns,
  rightColumns,
  bottomColumns,
  styleFooter = "bg-gray-800 text-white",
  bottomColumnLayout = "center",
  dividerColor= "white",
  titleStyle= "font-bold mb-2",
}) => {

  return (
    <footer className={`${styleFooter} p-4`}>
      <div className={`flex justify-around py-5 ${bottomColumns ? `border-b-[0.5px] border-${dividerColor}` : ''}`}>
        {leftColumns && (
          <div className="flex justify-start items-start gap-5">
            {leftColumns.map((leftColumn, columnIndex) => (
              <div key={columnIndex} className="flex flex-col items-start mx-4">
                {leftColumn.title && <div className={titleStyle}>{leftColumn.title}</div>}
                {leftColumn.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-2">
                    {item.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {rightColumns && (
          <div className="flex justify-end items-start gap-5">
            {rightColumns.map((rightColumn, columnIndex) => (
              <div key={columnIndex} className="flex flex-col items-start mx-4">
                {rightColumn.title && <div className={titleStyle}>{rightColumn.title}</div>}
                {rightColumn.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-2">
                    {item.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      {bottomColumns && (
        bottomColumnLayout === "center" ? (
          <div className="flex flex-col justify-center pt-5 items-center text-center">
            {bottomColumns.map((bottomColumn, index) => (
              <div key={index} className={titleStyle}>
                {bottomColumn.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-2">
                    {item.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-between pt-5">
            <div className="flex flex-col items-start ml-4">
              {bottomColumns[0] && bottomColumns[0].items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-end mr-4">
              {bottomColumns[1] && bottomColumns[1].items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </footer>
  );
};

export { CustomFooter }
