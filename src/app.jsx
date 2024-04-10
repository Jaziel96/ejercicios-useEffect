const Navlink = ({href, label, target="_self"}) => {
  return (
    <a 
      href={href}
      style={{
        textDecoration: "none",
        color: "black",
        padding: "0.5rem",
        border: "1px solid gray",
      }}  
      target={target}
    >
      {label}
    </a>
  );
};




const Navbar = () => {
  const styles = {
    
    borderBottom: "1px solid gray", 
    justifyContent:"space-between",
    alingItems: "center", 
    padding: "4px 4px",
    fontFamily: "sans-serif",
  };
  return (
    <div style={styles}>
      <h3>The Menu Company</h3>
      <div style={{display: "inline-flex",gap: "1rem"}}>
          <Navlink href="/" label="Home" />
          <Navlink href="/about" label="About" />
          <Navlink href="/blog" label="Blog" target="_blank"/>
      </div>
    </div>
  );
  
};
const App=()=> {
  return (
    <>
      <Navbar/>
      

    
    </>

  );
};

export default App;
