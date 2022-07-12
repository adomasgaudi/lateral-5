import React from "react";
import "twin.macro";
import Footer from "../app/bones/layout/Footer";
import Header from "../app/bones/layout/Header";
import { ContainX } from "../share/bones/components/Contain";
import Head from "../share/bones/components/Head";



const Layout = ({header, footer, children, title}) => {
  return(
    <>
      <Head title={title} />
      <div className="min-h-[800px]">
        {header}
        {children}
      </div>
      {footer}
    </>
  )
}




const BlogList = () => {
  return (
    <Layout footer={<Footer />} header={<Header />} title={"My Blog"}>
      <ContainX.Brilliant>
        hi
      </ContainX.Brilliant>
    </Layout>
  );
};

export default BlogList;
