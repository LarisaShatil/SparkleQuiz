
const Container = (props) => {

  return (
    <div className="h-screen p-4">
      <div className="ml-auto mr-auto w-1/2">
      {props.children}
      </div>

    </div>
  )
}

export default Container