const Container = (props) => {
  return (
      <div className="ml-auto mr-auto p-4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
        {props.children}
      </div>
  )
}

export default Container
