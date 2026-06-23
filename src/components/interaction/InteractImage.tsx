import { useInteraction } from "./InteractContext";

type ImageProps = { 
  src: string;
  size: number;
  pointId:number;
  pointPosition: string;
}

export default function InteractImage({src, size, pointId, pointPosition}:ImageProps) {

  const { selectedPoints, setSelectedPoints, connectionFound } = useInteraction()

  const handleClick = () => {
    if (selectedPoints[0] == 0){
      setSelectedPoints([pointId,0])
    } else
    if (selectedPoints[1] == 0){
      setSelectedPoints([selectedPoints[0], pointId])
    } else {
      setSelectedPoints([0,0])
    }
  }

  let style = size == 2? "col-span-2 row-span-2": "" 
  
  let selectedStyle = 
    connectionFound && selectedPoints.includes(pointId) ? " bg-green-500" :
    selectedPoints.includes(pointId) && selectedPoints[0] !== 0 && selectedPoints[1] !== 0 && !connectionFound? " bg-red-500" :
    selectedPoints.includes(pointId) ? " bg-black" : ""

  return ( 
    <div className={"relative hover:scale-105 transition duration-300 cursor-pointer " + style}>
        <div className={
          "h-16 w-16 absolute rounded-full transition duration-1000 cursor-pointer " + pointPosition + selectedStyle
        }
        />
        <img src={src} alt=""  className="h-full w-full " onClick={()=>handleClick()}/>
    </div>
  )
}
