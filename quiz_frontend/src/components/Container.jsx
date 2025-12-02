
const Container = (props) => {

  return (
    <div className=" h-screen bg-coverh-screen p-4 bg-center bg-no-repeat" style={{ "background": "url('../src/assets/bg-quiz.png"}}>
      <div className="ml-auto mr-auto lg:w-1/3 md:w-1/2 sm:w-1/2 w-full">
      {props.children}
      </div>

    </div>
  )
}

export default Container