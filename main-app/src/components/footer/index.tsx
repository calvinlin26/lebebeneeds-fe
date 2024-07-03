import * as React from "react";


const CustomFooter: React.FC = () => {

  const styleFooter = "bg-gray-800 text-white p-4"

  const leftColumns = [
    {
      title: "About Us",
      items: [
        { content: <p className="w-96">Indivara Group is one of the largest IT company in Indonesia and South East Asia region which focuses on consulting, software development and platform businesses.</p> },
      ],
    },
    {
      title: "Important Link",
      items: [
        { content: <a href="/terms-of-service">Enabler Businesses</a> },
        { content: <a href="/contact-us">Platform Businesses</a> },
      ],
    },
    {
      title: "Solutions",
      items: [
        { content: <a href="/about-us">Wealth Management System</a> },
        { content: <a href="/careers">Payment Platform</a> },
      ],
    },
  ];

  const rightColumns = [
    {
      title: "Contact Us",
      items: [
        { content: <p className="w-72">Kirana Boutique Office Blok G3 JL. Kirana Avenue No 1-2 Kelapa Gading, 14240 Jakarta, Indonesia</p> },
        { content: <p>Phone: +6221 22455773</p> },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        { content: <a href="/terms-of-service">Privacy Policy</a> },
        { content: <a href="/contact-us">Copyright Notice</a> },
      ],
    },
  ];

  const bottomColumns = [
    {
      items: [
        { content: <div>© 2024 My Company</div> },
      ],
    },
    {
      items: [
        { content: <a href="/privacy-policy">Privacy Policy</a> },
      ],
    },
  ];

  return (
    <footer className={`${styleFooter}`}>
      <div className="flex justify-around py-5 border-b-[1px]">
        <div className="flex justify-start items-start gap-5">
          {leftColumns.map((leftColumn, columnIndex) => (
            <div key={columnIndex} className="flex flex-col items-start mx-4">
              <div className="font-bold mb-2">{leftColumn.title}</div>
              {leftColumn.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-end items-start gap-5">
          {rightColumns.map((rightColumn, columnIndex) => (
            <div key={columnIndex} className="flex flex-col items-start mx-4">
              <div className="font-bold mb-2">{rightColumn.title}</div>
              {rightColumn.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-2">
                  {item.content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={`flex flex-col justify-center pt-5 items-center`}>
        {bottomColumns.map((bottomColumn, index) => (
          <div key={index} className="flex flex-col items-center">
            {bottomColumn.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-2">
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export { CustomFooter }
