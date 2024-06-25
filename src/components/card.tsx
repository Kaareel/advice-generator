interface Props{
    advice: string
    adviceId: string
}

function Card (props: Props) {
    return (
        <div className="flex flex-col items-center ">
          <p className="text-primary text-xs tracking-[3px] pt-10 pb-6">ADVICE #{props.adviceId}</p>
          <h1 className="flex items-center text-quaternary text-2xl text-center w-[85%]">"{props.advice}"</h1>
      </div>
    )
}

export default Card