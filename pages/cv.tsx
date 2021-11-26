import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

function Cv() {
  return (
    <>
      <Nav />
          <object data="CV.pdf" type="application/pdf" width="100%" height="100%" style={{minHeight:"100vh"}}>My CV should be here..</object>
    </>
  );
}

export default Cv;
