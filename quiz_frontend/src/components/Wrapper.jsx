const Wrapper = (props) => {
  return (
    <section
      className="border text-white border-b-purple-900 
    rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm
    bg-opacity-30 relative"
    >
      {props.children}
    </section>
  )
}

export default Wrapper
