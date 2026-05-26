import React from "react";

export default function layout({
  children,
  product,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {" "}
        {children}
        {product}
        {blogs}
        {setting}{" "}
      </body>
    </html>
  );
}
