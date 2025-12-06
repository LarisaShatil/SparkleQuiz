const Container = (props) => {
  return (
    <div
      className="mx-auto w-full 
      p-4 pt-18  lg:w-1/3 
      sm:w-2/3"
    >
      {props.children}
    </div>
  )
}

export default Container
